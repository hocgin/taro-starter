import Taro from "@tarojs/taro";

export enum EventKeys {
  UPDATE_USER = 'UPDATE_USER'
}

export class EventKit {


  static updateUser() {
    Taro.eventCenter.trigger(EventKeys.UPDATE_USER);
  }

  static onUpdateUser(func) {
    Taro.eventCenter.on(EventKeys.UPDATE_USER, func);
  }

  static offUpdateUser(func) {
    Taro.eventCenter.off(EventKeys.UPDATE_USER, func);
  }

};
