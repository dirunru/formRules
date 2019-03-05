/* 验证密码*/
export function isPassword(rule, value, callback) {
  if (value) {
    setTimeout(() => {
      if (!/[a-zA-Z0-9_]{6,18}$/.test(value)) {
        callback(new Error('输入密码长度在6~18之间,只能包含字母、数字和下划线 !'));
      } else {
        callback();
      }
    }, 100);
  }
}
// 验证手机号码
export function isPhone_num(rule, value, callback) {
  if (value) {
    setTimeout(() => {
      if (!Number(value)) {
        callback(new Error('请输入数字'));
      } else {
        if (!(/^1[34578]\d{9}$/.test(value))) {
          callback(new Error('请输入正确的手机号码'));
        } else {
          callback();
        }
      }
    }, 100);
  }
}
// 验证账号
export function isAccount(rule, value, callback) {
  if (value) {
    setTimeout(() => {
      if (!(/^[a-zA-z]\w{3,15}$/.test(value))) {
        callback(new Error('请输入字母、数字、下划线组成，字母开头，4-16位的账号'));
      } else {
        callback();
      }
    }, 100);
  }
}

// 验证姓名
export function isName(rule, value, callback) {
  if (value) {
    setTimeout(() => {
      if (!(/^[\u4E00-\u9FA5A-Za-z]+$/.test(value))) {
        callback(new Error('只能输入中文和英文姓名'));
      } else {
        callback();
      }
    }, 100);
  }
}
