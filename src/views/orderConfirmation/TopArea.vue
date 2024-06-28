<template>
      <div class="top">
        <div class="top__header">
          <div
          class="iconfont top__header__back"
          @click="handleBackClick"
          >&#xe6db;
        </div>
          确认订单
        </div>
        <div class="top__receiver">
          <div class="top__receiver__title">收货地址</div>
          <div class="top__receiver__address">北京理工大学国防科技</div>
          <div class="top__receiver__info">
            <span class="top__receiver__info__name">瑶妹</span>
            <span class="top__receiver__info__name">18910002213</span>
          </div>
          <div class="iconfont top__receiver__icon">&#xe6db;</div>
        </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  name: 'TopArea',
  setup () {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    return { handleBackClick }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  &__header {
    position:relative;
    padding-top: .2rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    font-size: .16rem;
    &__back{
      position: absolute;
      left: 0.19rem;
      font-size: .18rem;
    }
  }
  &__receiver{
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #fff;
    border-radius: .04rem;
    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: $content-font-color;
    }
    &__address {
      line-height: .2rem;
      padding:0 .4rem 0 .16rem;
      font-size: .14rem;
      color: $content-font-color;
    }
    &__info {
      padding: .06rem 0 0  .16rem;
      &__name{
        margin-right: .06rem;
        line-height: .18rem;
        color: $medium-gray;
        font-size: .12rem;
      }
    }
    &__icon {
      transform: rotate(180deg);
      position:absolute;
      right: .16rem;
      top: .5rem;
      color: $medium-gray;
      font-size: .2rem;
    }
  }
}
</style>
