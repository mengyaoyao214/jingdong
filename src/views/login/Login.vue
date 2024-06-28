<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper__img">
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="username"/>
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password"/>
    </div>
    <div class="wrapper__login--button" @click="handleLogin">登录</div>
    <div class="wrapper__login--link" @click="handleRegisterClick">立即注册</div>
    <Toast v-if="show" :message="toastMessage"/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

// 登录相关逻辑
const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  // 处理登录跳转
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result.code === 1) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
        // alert('登录失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
// 注册跳转
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { show, showToast, toastMessage } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()
    return { username, password, handleLogin, handleRegisterClick, show, showToast, toastMessage }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img{
    display: block;
    width: .66rem;
    height: .66rem;
    margin: 0 auto .4rem auto;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    box-sizing: border-box;
    padding: 0 .16rem;
    background: #f9f9f9;
    border: .01rem solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    &__content{
      width: 100%;
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color:$content-notice-fontcolor ;
      &::placeholder {
        color:$content-notice-fontcolor;
      }
    }
  }
  &__login--button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091ff;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    font-size: .16rem;
    text-align: center;
    color: $bgColor;
  }
  &__login--link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
