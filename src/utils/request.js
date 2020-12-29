import Config from '@/config';
import {Keys, removeStorageSync, getStorageSync} from "@/utils/storage";
import Taro from '@tarojs/taro';
import Pages from "@/utils/pages";

export default function Request(
  url,
  options,
) {
  url = `${Config.getBaseUrl()}${url}`;

  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = {...defaultOptions, ...options};

  newOptions.headers = {
    Accept: 'application/json',
    ...newOptions.headers,
  };
  newOptions.headers['X-Requested-With'] = 'XMLHttpRequest';
  newOptions.headers['Content-Type'] = 'application/json; charset=UTF-8';
  newOptions.headers['Origin'] = url;

  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    // newOptions.headers['X-Page-Url'] = window.location.href;
    newOptions.body = JSON.stringify(newOptions.body);
  }

  let token = getStorageSync(Keys.USER_INFO)?.token;
  if (token) {
    newOptions.headers['Authorization'] = `Bearer ${token}`;
  }

  let {body, headers, ...rest} = newOptions;
  return Taro.request({url, data: body, header: headers, ...rest})
    // 响应状态检查
    // eslint-disable-next-line no-unused-vars
    .then(({data, statusCode, header = {}, cookies = [], errMsg}) => {
      if (Config.isDev()) {
        console.log(`${statusCode}:[请求地址]:${url}`, data);
      }
      if (statusCode >= 200 && statusCode < 500) {
        // 需要登陆
        if (statusCode === 401 && !`${url}`.includes('/login/token')) {
          removeStorageSync(Keys.USER_INFO);
          Pages.gotoApply();
        }
        return data;
      }

      const error = new Error(errMsg);
      error.response = data;
      throw error;
    })
    // 异常响应处理
    .catch((e) => {
      console.log('[请求出现异常]', e);
    });
};

