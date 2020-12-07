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

  static isDev() {
    return process.env.NODE_ENV === 'development';
  }
}
