import { makeAutoObservable } from "mobx";
import { inject, injectable } from "inversify";
import { AppModel } from "../models/app.model.ts";

@injectable()
export class AppSettingsViewModel {
  get notification() {
    return this.appModel.notification;
  }

  get timer() {
    return this.appModel.timer;
  }

  constructor(
    @inject(AppModel)
    private appModel: AppModel,
  ) {
    makeAutoObservable(this);
  }

  setTimer(timer: number) {
    this.appModel.timer = timer;
  }

  clearNotification() {
    this.appModel.notification = "";
  }
}
