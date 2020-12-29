import Taro from "@tarojs/taro";

export const EventKeys = {
  UPDATE_USER: 'UPDATE_USER'
};

export default class Events {


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
