import Taro from "@tarojs/taro";
import {StorageKeys, StorageKit} from "@/_utils";

export default class Config {
  /**
   * 默认配置
   * @type {{}}
   */
  static defaultConfig = {};

  /**
   * 自定义配置
   * @returns {{}}
   */
  static getCustomConfig() {
    try {
      return StorageKit.getStorageSync(StorageKeys.CONFIG) || {};
    } catch (e) {
      return {};
    }
  }

  /**
   * 当前配置
   * @returns {Config.defaultConfig}
   */
  static getConfigs() {
    return {
      ...Config.defaultConfig,
      ...Config.getCustomConfig(),
    };
  }

  static getAppid() {
    // 获取项目编号，如果项目部署H5则与当前域名为项目编号。
    return this.getMiniProgram()?.appId || `${window.location.host}`;
  }

  static getBaseUrl() {
    // @ts-ignore
    return `${baseUrl}`;
  }

  static getVersion() {
    // @ts-ignore
    return `${version}`
  }

  static isDev() {
    return process.env.NODE_ENV === 'development';
  }

  static getLogoUrl() {
    return 'http://cdn.hocgin.top/16535610.png';
  }

  static getAppName() {
    return '应用名称';
  }

  static getMiniProgram() {
    if (Taro.getEnv() !== Taro.ENV_TYPE.WEAPP) {
      return null;
    }

    try {
      return Taro.getAccountInfoSync()?.miniProgram;
    } catch (e) {
      return null;
    }
  }

  static getDownloadUrl(url, filename = 'unknown') {
    return `${this.getBaseUrl()}/chaos/download?url=${url}&filename=${filename}`;
  }

  static getDefaultUserUrl() {
    return 'http://cdn.hocgin.top/anonymous2.png';
  }
}
