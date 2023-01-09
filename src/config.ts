export default class Config {

  static getBaseUrl() {
    // @ts-ignore
    return `${baseUrl}`;
  }

  static getVersion() {
    // @ts-ignore
    return `${version}`
  }
}
