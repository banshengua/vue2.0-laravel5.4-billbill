
import axios from 'axios';
  export function fetch(url, params) {
      return new Promise((resolve, reject) => {
          axios.get(url, params)
             .then(response => {
               resolve(response.data);
  })
 .catch((error) => {
        reject(error);
       })
    })
  }
  export default {
    // 获取我的页面的后台数据
      mineBaseMsgApi(url) {
        // alert('进入api.js')
          return fetch(url);
      },
      commonApi(url, params) {
        return fetch(url, params)
      }
  }
  