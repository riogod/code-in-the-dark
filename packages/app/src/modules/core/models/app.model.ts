import { makeAutoObservable } from "mobx";
import { inject, injectable } from "inversify";

import { LocalStorageRepository } from "../data/localStorage.repository.ts";
import { ThemeMode } from "./app.interface.ts";

@injectable()
export class AppModel {
  private _defaultColorMode: ThemeMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "light";
  private _colorMode: Omit<ThemeMode, "system">;
  private _colorModeSettings: ThemeMode;
  private _notification: string = "";
  private _timer: number = 0;

  get notification() {
    return this._notification;
  }

  get timer(): number {
    return this._timer;
  }

  get appThemeMode(): Omit<ThemeMode, "system"> {
    return this._colorMode;
  }

  get colorModeSettings(): ThemeMode {
    return this._colorModeSettings;
  }

  set notification(notification: string) {
    this._notification = notification;
  }

  set timer(timer: number) {
    this._timer = timer;
    this.localStorageRepository.setKey<string>("timer", timer.toString());
  }

  set appThemeMode(themeMode: ThemeMode | undefined) {
    if (!themeMode) {
      this.localStorageRepository.removeKey("themeMode");
      this._colorMode = this._defaultColorMode;
      this._colorModeSettings = "system";
      return;
    }
    this.localStorageRepository.setKey<ThemeMode>("themeMode", themeMode);
    this._colorMode = themeMode;
    this._colorModeSettings = themeMode;
  }

  constructor(
    @inject(LocalStorageRepository)
    private localStorageRepository: LocalStorageRepository,
  ) {
    makeAutoObservable(this);
    const getThemeMode =
      this.localStorageRepository.getKey<ThemeMode>("themeMode");

    const timer = this.localStorageRepository.getKey<number>("timer");
    this.timer = timer || 10;
    this._colorMode = getThemeMode || this._defaultColorMode;
    this._colorModeSettings = getThemeMode || "system";
  }
}
