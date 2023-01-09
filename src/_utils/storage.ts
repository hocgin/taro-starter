import Taro from "@tarojs/taro";
import {Key} from "react";

export enum StorageKeys {
  USER_INFO = 'USER_INFO',
  CONFIG = 'CONFIG',
}

export class StorageKit {

  static setStorageSync = (key: StorageKeys, val: any) => Taro.setStorageSync(key, val);
  static getStorageSync = (key: StorageKeys) => Taro.getStorageSync(key);
  static removeStorageSync = (key: StorageKeys) => Taro.removeStorageSync(key);

}
