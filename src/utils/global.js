const globalData = {}

export const Keys = {
  USER_INFO: 'userInfo'
};

export function setGlobalData(key, val) {
  globalData[key] = val;
}

export function getGlobalData(key) {
  return globalData[key];
}
