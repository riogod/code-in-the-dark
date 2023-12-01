import { makeAutoObservable, runInAction } from "mobx";
import { inject, injectable } from "inversify";
import { GameSetup } from "./game.interface.ts";
import { LocalStorageRepository } from "../../core/data/localStorage.repository.ts";
import { challengesConfig, IChallengeConfig } from "../../../data/config.ts";

const TICK = 5;

const START_CODE =
  "<html>\n" +
  "  <head>\n" +
  '    <style type="text/css">\n' +
  "    </style>\n" +
  "  </head>\n" +
  "  <body>\n" +
  "\n" +
  "  </body>\n" +
  "</html>";

@injectable()
export class GameModel {
  private _gameStart = false;
  private _gameFinish = true;
  private _userName: string = "";
  private _timer: number = 0;
  private _fullTime: number = 0;
  private _timerInterval: NodeJS.Timeout | null = null;
  private _score: number = 0;
  private _code: string = START_CODE;
  private _challengeConfig: IChallengeConfig = challengesConfig[0];

  private _tick: number = TICK;
  private _progressTicker: number = 0;

  get challengeConfig(): IChallengeConfig {
    return this._challengeConfig;
  }

  get score(): number {
    return this._score;
  }

  get progressTicker(): number {
    return this._progressTicker;
  }

  get tick(): number {
    return this._tick;
  }

  get start(): boolean {
    return this._gameStart;
  }

  get finish(): boolean {
    return this._gameFinish;
  }

  get timer(): number {
    return this._timer;
  }

  get userName(): string {
    return this._userName;
  }

  get code(): string {
    return this._code;
  }

  constructor(
    @inject(LocalStorageRepository)
    private localStorageRepository: LocalStorageRepository,
  ) {
    makeAutoObservable(this);
  }

  gameStart(param: GameSetup) {
    this._gameStart = true;
    this._userName = param.userName;
    this._timer = 0;
    this._fullTime = param.time;
    this._gameFinish = false;
    this._progressTicker = this._timer * TICK;
    this.localStorageRepository.setKey("userName", param.userName);
    this.localStorageRepository.setKey("gameTimer", param.time.toString());
    this.localStorageRepository.setKey("score", 0);
    this.localStorageRepository.setKey("code", this._code);
    this.localStorageRepository.setKey("gameStarted", "true");
    this.localStorageRepository.setKey("finish", this._gameFinish.toString());
  }

  gameUpdate() {
    const started = this.isTrueFromString(
      this.localStorageRepository.getKey<string>("gameStarted"),
    );

    this._gameStart = started || false;

    this._timer =
      Number(this.localStorageRepository.getKey<number>("gameTimer")) || 0;
    this._code = this.localStorageRepository.getKey<string>("code") || "";
    this._score =
      Number(this.localStorageRepository.getKey<number>("score")) || 0;
    this._fullTime = this.localStorageRepository.getKey<number>("timer") || 0;

    this._userName =
      this.localStorageRepository.getKey<string>("userName") || "";

    this._gameFinish = this.isTrueFromString(
      this.localStorageRepository.getKey<string>("finish"),
    );
    this._progressTicker = this._timer * TICK;

    if (started && !this._gameFinish) {
      this.startTimer();
    }
  }

  startTimer() {
    this._timerInterval = setInterval(() => {
      if (this._progressTicker <= 0 && this._timerInterval) {
        runInAction(() => {
          this._score = 0;
          this.localStorageRepository.setKey("score", 0);
          this._progressTicker = 0;
        });
        clearInterval(this._timerInterval);
        this._timerInterval = null;
        return;
      }
      runInAction(() => {
        this._progressTicker = this._progressTicker - 1;
      });
      this.setTick();
    }, 200);
  }

  setTick() {
    if (this._tick <= 0) {
      runInAction(() => {
        this._timer -= 1;
        this.localStorageRepository.setKey("gameTimer", this._timer.toString());
        this._tick = 5;
      });
      return;
    }
    this._tick -= 1;
  }

  update(code: string) {
    if (!this._timerInterval) {
      this.startTimer();
    }
    this._code = code;
    this.localStorageRepository.setKey("code", code);

    runInAction(() => {
      this._timer = this._fullTime;
      this._progressTicker = this._fullTime * TICK;
    });
  }

  updateScore(score: number) {
    this._score = score;
    this.localStorageRepository.setKey("score", score.toString());
  }

  setChallenge(challengeConfig: IChallengeConfig) {
    this._challengeConfig = challengeConfig;
  }

  private isTrueFromString(value: string): boolean {
    return /^true$/i.test(value);
  }

  dispose() {
    this._gameStart = false;
    this._userName = "";
    this._timer = 0;
    this._gameFinish = true;
    this._score = 0;
    this._code = START_CODE;
    this.localStorageRepository.removeKey("score");
    this.localStorageRepository.removeKey("userName");
    this.localStorageRepository.removeKey("gameTimer");
    this.localStorageRepository.removeKey("gameStarted");
    this.localStorageRepository.removeKey("code");
    this.localStorageRepository.removeKey("finish");
    if (this._timerInterval) {
      clearInterval(this._timerInterval);
      this._timerInterval = null;
    }
  }
}
