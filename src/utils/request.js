import Config from '@/config';
import Taro from '@tarojs/taro';

export default function Request(
  url,
  options,
) {
  // eslint-disable-next-line no-undef
  url = `${baseUrl}${url}`;

  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = {...defaultOptions, ...options};

  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    newOptions.headers = {
      Accept: 'application/json',
      ...newOptions.headers,
    };

    // newOptions.headers['X-Page-Url'] = window.location.href;
    newOptions.headers['X-Requested-With'] = 'XMLHttpRequest';
    newOptions.headers['Content-Type'] = 'application/json; charset=UTF-8';
    newOptions.headers['Origin'] = url;
    newOptions.body = JSON.stringify(newOptions.body);
  }

  let {body, ...rest} = newOptions;
  return Taro.request({url, data: body, ...rest})
    // 响应状态检查
    // eslint-disable-next-line no-unused-vars
    .then(({data, statusCode, header = {}, cookies = [], errMsg}) => {
      if (Config.isDev()) {
        console.log(`${statusCode}:[请求地址]:${url}`);
      }
      if (statusCode >= 200 && statusCode < 500) {
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

