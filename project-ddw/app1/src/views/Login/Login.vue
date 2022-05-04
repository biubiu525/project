<template>
  <div>
    <div class="head">
      <router-link to="/home">
        <a href="#" class="home">
          <img
            src="https://img62.ddimg.cn/upload_img/00873/web/logo-1628229920.png"
            alt="Vue logo"
        /></a>
      </router-link>
      <div class="c"></div>
      <div class="r">
        <a href="#" class="accessible">切换无障碍</a>
        <a
          href="http://survey.dangdang.com/html/2526.html"
          target="_blank"
          class="improve"
        >
          <img
            src="https://img61.ddimg.cn/upload_img/00862/web/icon-1-1628495800.png"
            alt=""
          />
          <span>“登陆页面”改进建议</span>
        </a>
      </div>
    </div>
    <div class="container">
      <div>
        <a
          href="http://a.dangdang.com/api/data/cpx/link/38930001/1"
          class="left"
        ></a>
        <div class="right">
          <div class="con">
            <div>
              <div class="success" v-show="showsuccess">
                <h2 data-v-c6961eae="">恭喜你，注册成功！</h2>
                <div data-v-c6961eae="" class="inputs">
                  <div class="l">
                    <label>设置登录密码 (可跳过)</label
                    ><input
                      type="text"
                      autofocus="autofocus"
                      v-model="password"
                    />
                  </div>
                  <div class="r">
                    <i class="iconfont clear" style="display: none"></i>
                    <!----><i class="iconfont eye"></i>
                  </div>
                </div>
                <div data-v-c6961eae="" class="error" style="display: none">
                  <i data-v-c6961eae="" class="iconfont"></i>
                </div>
                <a data-v-c6961eae="" href="#" class="btn" @click="jump()"
                  >完成</a
                >
              </div>
              <div class="login" v-show="showlogin">
                <div class="switchOut">
                  <div class="switch">
                    <a href="#" @click="cchange" v-show="showcode">
                      <img
                        src="https://img62.ddimg.cn/upload_img/00862/web/pass-1628497953.png"
                        alt=""
                      />
                    </a>
                    <a href="#" @click="pchange" v-show="showpass">
                      <img
                        src="https://img60.ddimg.cn/upload_img/00862/web/code-1628497980.png
"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div class="code" v-show="showcode">
                  <h3>扫码登录</h3>
                  <div class="s1">
                    <div>
                      <img
                        src="https://login.dangdang.com/p/get_qrcode.php?t=1649766211548"
                        alt=""
                      />
                    </div>
                    <div class="invalid" style="display: none">
                      <h4>二维码已失效</h4>
                      <a>点击刷新</a>
                    </div>
                    <h6>
                      "打开"
                      <a
                        href="https://t.dangdang.com/20130220_ydmr"
                        target="_blank"
                        >手机当当</a
                      >
                      "扫一扫登录"
                    </h6>
                  </div>
                </div>
                <div class="pass" v-show="showpass">
                  <h3>
                    <a href="#" @click="changem" :class="flag1">密码登录</a>
                    <i></i>
                    <a href="#" @click="changey" :class="flag2">验证码登录</a>
                  </h3>
                  <div class="from1">
                    <div class="inputs mt38">
                      <div class="l">
                        <label for="">{{ username }}</label>
                        <input
                          type="text"
                          autofocus="autofocus"
                          v-model="phone"
                        />
                      </div>
                      <div class="r">
                        <i class="clear iconfont"></i>
                      </div>
                    </div>
                    <div class="mt22">
                      <div>
                        <div class="inputc">
                          <div class="l">
                            <label for="">{{ password1 }}</label>
                            <input type="text" v-model="password" />
                          </div>
                          <div class="r" v-show="flag3">
                            <a href="#">发送验证码</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="error" style="display: none">
                      <i class="iconfont"></i>
                    </div>
                    <div class="agreement">
                      登陆即同意
                      <a
                        href="https://help.dangdang.com/details/page254"
                        target="_blank"
                        >用户协议、</a
                      >
                      <a
                        href="https://help.dangdang.com/details/page258"
                        target="_blank"
                        >隐私政策</a
                      >
                    </div>
                    <a href="#" class="btn" @click.prevent="userLogin">登录</a>
                    <div class="other">
                      <a href="#" @click="showregisterb()">立即注册</a>
                      <i></i>
                      <a
                        href="https://safe.dangdang.com/find_password.php"
                        target="_blank"
                        >忘记密码</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="register" v-show="showregister">
                <h2>
                  <a href="#" class="iconfont" @click="showloginb()"></a
                  ><span>立即注册</span>
                </h2>
                <div class="inputs mt38">
                  <div class="l">
                    <label>手机号</label
                    ><input type="text" autofocus="autofocus" v-model="phone" />
                  </div>
                  <div class="r">
                    <i class="iconfont clear" style="display: none"></i>
                    <!---->
                  </div>
                </div>
                <div class="mt22">
                  <div>
                    <div class="inputc">
                      <div class="l">
                        <label>验证码</label
                        ><input type="text" v-model="code" />
                      </div>
                      <div class="r">
                        <a href="#" @click="getCode">发送验证码</a>
                      </div>
                    </div>
                    <!---->
                  </div>
                </div>
                <div class="error" style="display: none">
                  <i class="iconfont"></i>
                </div>
                <div class="agreement">
                  登录即同意
                  <a
                    target="_blank"
                    href="https://help.dangdang.com/details/page254"
                    >用户协议、</a
                  ><a
                    target="_blank"
                    href="https://help.dangdang.com/details/page258"
                    >隐私政策</a
                  >
                </div>
                <a href="#" class="btn" @click="showsuccessb()">同意并注册</a>
                <div class="other"></div>
              </div>
            </div>
          </div>
          <div class="third">
            <a
              href="https://open.weixin.qq.com/connect/qrconnect?appid=wx45d22167e37d81ef&scope=snsapi_login&response_type=code&redirect_uri=https%3A%2F%2Flogin.dangdang.com%2Flogin_third_weixin%2Fcallback_weixin.php&state=466d3f88665203332b583b2169763427#dd_refer=https%3A%2F%2Fc.duomai.com%2Ftrack.php%3Fsite_id%3D399182%26aid%3D64%26euid%3D%26t%3Dhttp%253a%252f%252fwww.dangdang.com%252f%26dm_fid%3D16055"
            >
              <img
                src="http://img63.ddimg.cn/upload_img/00862/web/wechat-1628496723.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                src="http://img60.ddimg.cn/upload_img/00862/web/alipay-1628496855.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                src="http://img61.ddimg.cn/upload_img/00862/web/qq-1628496796.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                src="http://img63.ddimg.cn/upload_img/00862/web/weibo-1628496903.png"
                alt=""
              />
            </a>

            <a href="">
              <img
                src="http://img63.ddimg.cn/upload_img/00873/web/baidu-1628496931.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      showpass: true,
      showcode: false,
      flag1: "on",
      flag2: "",
      username: "手机号",
      password1: "密码",
      flag3: false,
      showlogin: true,
      showregister: false,
      showsuccess: false,
      //收集手机号
      phone: "",
      //收集验证码
      code: "",
      //手机登陆手机号
      phone1: "",
      //收集密码
      password: "",
      password2: "",
    };
  },

  mounted() {},

  methods: {
    pchange: function () {
      this.showpass = false;
      this.showcode = true;
    },
    cchange: function () {
      this.showpass = true;
      this.showcode = false;
    },
    changem: function () {
      this.flag1 = "on";
      this.flag2 = "";
      this.username = "手机号/昵称/邮箱";
      this.password1 = "密码";
      this.flag3 = false;
    },
    changey: function () {
      this.flag2 = "on";
      this.flag1 = "";
      this.username = "手机号";
      this.password1 = "验证码";
      this.flag3 = true;
    },
    showloginb() {
      this.showlogin = true;
      this.showregister = false;
    },
    showregisterb() {
      this.showlogin = false;
      this.showregister = true;
    },
    showsuccessb() {
      if (this.phone && this.code) {
        this.showregister = false;
        this.showsuccess = true;
      }
    },
    async jump() {
      if (this.password) {
        try {
          //如果成功 ----路由跳转
          const { phone, code, password } = this;
          await this.$store.dispatch("userRegister", {
            phone,
            code,
            password,
          });
          this.$router.push("/home");
        } catch (error) {}
      } else {
        this.$router.push("/home");
      }
    },
    //获取验证码
    async getCode() {
      //如果获取到验证码
      const phone = this.phone;
      phone && (await this.$store.dispatch("getCode", phone));
      this.code = this.$store.state.user.code;
    },
    //登录
    async userLogin() {
      const { phone, password } = this;
      if (phone && password) {
        try {
          await this.$store.dispatch("userLogin", { phone, password });
          this.$router.push("/home");
        } catch (error) {
          alert(error.message);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  align-items: center;
}

a {
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.head > .c {
  flex: 1;
}

.head .r {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.head .r .accessible {
  font-size: 14px;
  color: #787878;
  margin-bottom: 6px;
}

.head .improve {
  font-size: 14px;
  color: #787878;
}

.head .improve img {
  width: 20px;
  height: 20px;
}

.container {
  height: 590px;
  margin-top: 43px;
  background-image: url("@/assets/get_login_ad.php");
  background-repeat: no-repeat;
  background-position: 50%;
}

.container > div {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.container .left {
  flex: 1;
  height: 100%;
  margin-right: 100px;
}

.container .right {
  width: 420px;
  height: 470px;
  background: #fff;
  box-shadow: 0 6px 20px 0 rgb(37 43 50 / 7%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.container .right .con {
  flex: 1;
}

.login {
  padding: 0 40px 0 40px;
}

.login .switchOut {
  position: relative;
  height: 40px;
  margin: 0 -40px;
}

.login .switch {
  position: absolute;
  top: 0;
  right: 0;
}

.login .switch img {
  width: 79px;
  height: 79px;
  cursor: pointer;
}

.login .code h3 {
  font-family: MicrosoftYaHei-Bold;
  font-size: 18px;
  color: #333;
  letter-spacing: 0;
  line-height: 17px;
  font-weight: 700;
  text-align: center;
}

.login .code .s1 > div {
  background: #fff;
  box-shadow: 0 2px 9px 0 rgb(37 43 50 / 8%);
  border-radius: 4px;
  width: 210px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 44px auto 26px;
  text-align: center;
  position: relative;
}

.login .code .s1 > div img {
  width: 180px;
  height: 180px;
}

.login .code .s1 > div .invalid {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: hsla(0, 0%, 100%, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login .code .s1 > div .invalid h4 {
  font-family: MicrosoftYaHeiSemibold;
  font-size: 16px;
  color: #333;
  text-align: center;
}

.login .code .s1 > div .invalid a {
  background-image: linear-gradient(90deg, #fe5447, #f3344a);
  box-shadow: 0 3px 8px 1px rgb(235 28 49 / 22%);
  border-radius: 5px;
  font-family: MicrosoftYaHeiSemibold;
  font-size: 15px;
  color: #fff;
  text-align: center;
  width: 108px;
  height: 36px;
  line-height: 36px;
  margin-top: 24px;
}

.login .code h6 {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #626262;
  text-align: center;
  line-height: 14px;
}

.login .code h6 a {
  color: #ff463c;
  margin-right: 12px;
}
.login .pass h3 {
  display: flex;
  justify-content: center;
}

.login .pass h3 a.on {
  font-family: MicrosoftYaHei-Bold;
  font-size: 18px;
  color: #333;
  font-weight: 700;
}

.login .pass h3 i {
  width: 1px;
  height: 15px;
  background: #b2b2b2;
  margin: 0 42px;
}

.login .pass h3 a {
  font-family: MicrosoftYaHeiSemibold;
  font-size: 18px;
  color: #717171;
  letter-spacing: 0;
  line-height: 17px;
}

.inputs {
  height: 52px;
  background: #f9f9f9;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
}

.login .pass .mt38 {
  margin-top: 38px;
}

.inputs .l {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.inputs .r {
  display: flex;
  align-items: center;
}

.inputs .l label {
  font-family: MicrosoftYaHei;
  font-size: 15px;
  color: #828282;
  transition: all 0.1s linear;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
}

.inputs .l input {
  display: block;
  font-family: MicrosoftYaHei;
  font-size: 15px;
  color: #222;
  letter-spacing: 0;
  line-height: 15px;
  width: 100%;
  background: none;
  flex: 1;
  height: 32px;
  padding: 20px 0 0 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
}

.login .pass .mt38 {
  margin-top: 38px;
}

.inputs .r .clear {
  font-size: 12px;
  color: #ccc;
  cursor: pointer;
}

.inputs .r .eye {
  font-size: 18px;
  color: #999;
  cursor: pointer;
}

.inputs .r .clear + .eye {
  margin-left: 20px;
}

.on .l label {
  font-size: 12px;
  top: 4px;
  pointer-events: none;
}

.login .pass .mt22 {
  margin-top: 22px;
}

.inputc {
  height: 52px;
  background: #f9f9f9;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
}

.inputc .l {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.inputc .l label {
  font-family: MicrosoftYaHei;
  font-size: 15px;
  color: #828282;
  transition: all 0.1s linear;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
}

.inputc .l input {
  display: block;
  font-family: MicrosoftYaHei;
  font-size: 15px;
  color: #222;
  letter-spacing: 0;
  line-height: 15px;
  width: 100%;
  background: none;
  flex: 1;
  height: 32px;
  padding: 20px 0 0 0;
}

.inputc .r {
  display: flex;
  align-items: center;
}

.inputc .r a {
  color: #fb4a48;
}

.inputc .r a,
.inputc .r span {
  font-family: MicrosoftYaHei;
  font-size: 15px;
  letter-spacing: 0;
  text-align: right;
  line-height: 15px;
}

.inputc .r span {
  color: #333;
}

.on .l label {
  font-size: 12px;
  top: 4px;
  pointer-events: none;
}

.login .pass .error {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #ff3228;
  letter-spacing: 0;
  line-height: 12px;
  margin-top: 14px;
}

.login .pass .error i {
  margin-right: 4px;
}

.login .pass .error + .agreement {
  margin-top: 20px;
}

.login .pass .agreement {
  margin-top: 30px;
  font-family: MicrosoftYaHei;
  font-size: 13px;
  color: #908e8f;
  text-align: center;
  line-height: 13px;
}

.login .pass .agreement a {
  color: #151515;
}

.login .pass .btn {
  display: block;
  text-align: center;
  background-image: linear-gradient(90deg, #fe5447, #f3344a);
  box-shadow: 0 3px 8px 1px rgb(235 28 49 / 22%);
  border-radius: 5px;
  height: 50px;
  line-height: 50px;
  font-family: MicrosoftYaHeiSemibold;
  font-size: 18px;
  color: #fff;
  margin-top: 18px;
}

.login .pass .other {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
}

.login .pass .other a {
  font-family: MicrosoftYaHei;
  font-size: 13px;
  color: #626262;
  letter-spacing: 0;
  line-height: 14px;
}

.login .pass .other i {
  width: 1px;
  height: 11px;
  background: #b2b2b2;
  margin: 0 20px;
}

.login .pass .other a {
  font-family: MicrosoftYaHei;
  font-size: 13px;
  color: #626262;
  letter-spacing: 0;
  line-height: 14px;
}

.container .right .third {
  height: 64px;
  background: rgba(249, 248, 248, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container .right .third a {
  margin: 0 16px;
}

.container .right .third img {
  width: 28px;
  height: 28px;
}

.register {
  padding: 40px 40px 0 40px;
}

.register > h2 {
  font-family: MicrosoftYaHei-Bold;
  font-size: 18px;
  color: #333;
  letter-spacing: 0;
  line-height: 17px;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.register > h2 i {
  cursor: pointer;
}

.register > h2 span {
  flex: 1;
  text-align: center;
  padding-right: 18px;
}

.register .mt38 {
  margin-top: 38px;
}

.register .mt22 {
  margin-top: 22px;
}

.register .error {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #ff3228;
  letter-spacing: 0;
  line-height: 12px;
  margin-top: 14px;
}

.register .error i {
  margin-right: 4px;
}

.register .agreement {
  margin-top: 30px;
  font-family: MicrosoftYaHei;
  font-size: 13px;
  color: #908e8f;
  text-align: center;
  line-height: 13px;
}

.register .agreement a {
  color: #151515;
}

.register .error + .agreement {
  margin-top: 20px;
}

.register .btn {
  display: block;
  text-align: center;
  background-image: linear-gradient(90deg, #fe5447, #f3344a);
  box-shadow: 0 3px 8px 1px rgba(235, 28, 49, 0.22);
  border-radius: 5px;
  height: 50px;
  line-height: 50px;
  font-family: MicrosoftYaHeiSemibold;
  font-size: 18px;
  color: #fff;
  margin-top: 18px;
}

.register .prohibit {
  pointer-events: none;
}

.register .other {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
}

.register .other a {
  font-family: MicrosoftYaHei;
  font-size: 13px;
  color: #626262;
  letter-spacing: 0;
  line-height: 14px;
}

.register .other i {
  width: 1px;
  height: 11px;
  background: #b2b2b2;
  margin: 0 20px;
}

.success {
  padding: 40px 40px 0 40px;
}

.success h2 {
  font-family: MicrosoftYaHei-Bold;
  font-size: 18px;
  color: #333;
  letter-spacing: 0;
  text-align: center;
  line-height: 17px;
  font-weight: 600;
}

.success .inputs {
  margin-top: 82px;
}

.success .error {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #ff3228;
  letter-spacing: 0;
  line-height: 12px;
  margin-top: 14px;
}

.success .error i {
  margin-right: 4px;
}

.success .btn {
  margin-top: 88px;
  display: block;
  text-align: center;
  background-image: linear-gradient(90deg, #fe5447, #f3344a);
  box-shadow: 0 3px 8px 1px rgba(235, 28, 49, 0.22);
  border-radius: 5px;
  height: 50px;
  line-height: 50px;
  font-family: MicrosoftYaHeiSemibold;
  font-size: 18px;
  color: #fff;
}
</style>
