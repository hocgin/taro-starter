import Config from '@/config';
import Taro from '@tarojs/taro'

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
  return Taro.request({url: url, data: body, ...rest})
    // 响应状态检查
    .then((response) => {
      if (Config.isDev()) {
        console.log(`${response.status}:[请求地址]:${response.url}`);
      }
      if (response.status >= 200 && response.status < 500) {
        return response;
      }

      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    // 响应结果转JSON
    .then(response => {
      return response.json();
    })
    // 异常响应处理
    .catch((e) => {
      console.log('[请求出现异常]', e);
    });
};

