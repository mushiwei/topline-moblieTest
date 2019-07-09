<template>
  <div class="login-wrap">
    <!-- 头部 -->
    <van-nav-bar title="登录" />
    <!-- 表单 -->
    <from>
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
          :error-message="errors.mobile"
        />
        <van-field v-model="user.code" type="password" label="密码" placeholder="请输入密码"
        :error-message="errors.code"
        required />
      </van-cell-group>
      <!-- 底部 -->
      <div class="login-btn-box">
        <van-button type="info" class="login-btn"
        :loading="loginLoading"
        loading-text="登录中..."
        @click.prevent="handLogin">登录</van-button>
      </div>
    </from>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: { // 提交登录的表单数据
        mobile: '18801185985',
        code: '123456'
      },
      loginLoading: false, // 控制登录按钮的loading 状态
      errors: {
        mebile: '',
        code: ''
      }
    }
  },
  methods: {
    async handLogin () {
      try {
        // 发送请求之前,校验表单数据,校验通过,才进行登录
        const { mobile, code } = this.user
        const errors = this.errors

        if (mobile.length) {
          errors.mobile = ''
        } else {
          errors.mobile = '手机号不能为空'
          return
        }
        if (code.length) {
          errors.code = ''
        } else {
          errors.code = '手机号不能为空'
          return
        }
        // 表单验证通过,发送请求,loading 加载
        this.loginLoading = true
        const data = await login(this.user)
        this.$store.commit('setUser', data)
        /**
         * 這裡先簡單粗暴跳轉的首頁
         * 真實的業務處理成跳轉到之前過來的頁面
         */
        // this.$router.push({
        //   name: 'home'
        // })
      } catch (err) {
        console.log(err)
        console.log('登录失败')
      }
      this.loginLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
 .login-btn-box {
   padding: 20px;
   .login-btn {
     width: 100%;
   }
 }
</style>
