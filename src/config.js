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
    return {};
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
    // eslint-disable-next-line no-undef
    return `${appid}`;
  }

  static getBaseUrl() {
    // eslint-disable-next-line no-undef
    return `${baseUrl}`;
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

  static getDownloadUrl(url, filename = 'unknown') {
    return `${this.getBaseUrl()}/chaos/download?url=${url}&filename=${filename}`;
  }

  static getDefaultUserUrl() {
    return 'http://cdn.hocgin.top/anonymous2.png';
  }
}
