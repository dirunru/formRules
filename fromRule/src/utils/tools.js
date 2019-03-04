let tools = {};

tools.install = function (Vue, options) {
    Vue.mixin({

        data() {
            return {
              
            };
        },
        mounted() {
        },
        methods: {
            // 检查邮箱的正则
            checkEmail(phone) {
                if (!(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(phone))) {
                    return true;
                } else {
                    return false;
                }
            },
            // 检查账号正则
            checkAccount(account) {
                if (!(/^[a-zA-Z][a-zA-Z0-9_]{4,19}$/.test(account))) {
                    return true;
                } else {
                    return false;
                }
            },
            // 检查密码正则
            checkPassword(password) {
                if (!(/[a-zA-Z0-9_]{6,18}$/.test(password))) {
                    return true;
                } else {
                    return false;
                }
            },
            //检查姓名
            checkName(name) {
                if (!(/^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(name))) {
                    return true;
                } else {
                    return false;
                }
            },
           
            checkPhone(phone) {
                if (!(/^1[34578]\d{9}$/.test(phone))) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    });
}

export default tools;
