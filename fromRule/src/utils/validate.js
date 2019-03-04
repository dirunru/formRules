/* 是否是公司邮箱*/
export function isDecimal(rule, value, callback) {
    if (!value) {
      return callback(new Error('输入不可以为空'));
    }
    setTimeout(() => {
      if (!Number(value)) {
        callback(new Error('请输入数字'));
      } else {
        if (!/^[a-zA-Z0-9_]{6,18}$/.test(value)) {
          callback(new Error('输入密码格式不正确'));
        } else {
          callback();
        }
      }
    }, 100);
}