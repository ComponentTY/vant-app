<template>
  <div>
    <van-popup v-model="addshowPop" position="right" :overlay="true" lazy-render>
      <van-nav-bar
        title="设置"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div style="width: 100%;margin-top: 60px;">
        <van-cell  title="用户名" :value='username'/>
        <van-cell title="关于月淘淘" is-link to="common" />
        <van-cell title="隐私" is-link to="common" />
        <van-cell title="通用" is-link to="common" />
      </div>
      <div style="display:flex;justify-content: center;">
        <van-button style="margin: 30px auto;" type='info' @click="loginOut">退出登录</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {localUser} from '@/util/local.js'
export default {
  data () {
    return {
      addshowPop: false,
      username: localUser().username
    }
  },
  mounted () {
    this.addshowPop = true
  },
  methods: {
    onClickLeft () {
      window.history.go(-1)
    },
    loginOut () {
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.van-popup{
  width: 100%;
  height: 100%;
}
</style>
