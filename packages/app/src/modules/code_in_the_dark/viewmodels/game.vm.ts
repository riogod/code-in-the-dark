import { makeAutoObservable } from "mobx";
import { inject, injectable } from "inversify";
import { GameModel } from "../models/game.model.ts";
import { AppModel } from "../../core/models/app.model.ts";
import { challengesConfig, IChallengeConfig } from "../../../data/config.ts";

@injectable()
export class GameViewModel {

  get level(): number {
    return this.gameModel.level;
  }
  get challengeConfig(): IChallengeConfig {
    return this.gameModel.challengeConfig;
  }

  get allChanges(): IChallengeConfig[] {
    return challengesConfig;
  }

  get timer(): number {
    return this.gameModel.timer;
  }

  get progressTicker(): number {
    return this.gameModel.progressTicker;
  }

  get code(): string {
    return this.gameModel.code;
  }

  get score(): number {
    return this.gameModel.score;
  }

  get userName(): string {
    return this.gameModel.userName;
  }

  get start(): boolean {
    return this.gameModel.start;
  }

  constructor(
    @inject(GameModel)
    private gameModel: GameModel,
    @inject(AppModel)
    private appModel: AppModel,
  ) {
    makeAutoObservable(this);
  }

  setChallenge(config: IChallengeConfig) {
    this.gameModel.setChallenge(config);
  }

  gameStart(username: string) {
    this.gameModel.gameStart({
      userName: username,
      time: this.appModel.timer,
    });
  }

  update(code: string) {
    this.gameModel.update(code);
    this.upScore();
  }

  upScore() {
    this.gameModel.updateScore(this.score + 1);
  }

  dispose() {
    this.gameModel.dispose();
  }
}
