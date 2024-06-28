<template>
  <div class="docker">
    <div
    v-for="(item, index) in dockerList"
    :class="{ 'docker__item': true, 'docker__item--active': index === currentIndex }"
    :key="item.icon">
    <router-link :to="item.to">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      { icon: '&#xe651;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe638;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe613;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe78b;', text: '我的', to: { name: 'Home' } }
    ]
    return { dockerList }
  }

}
</script>

<style lang="scss"  scoped>
  @import '../style/viriables.scss';
  .docker{
    display: flex;
    position: absolute;
    padding: 0 .18rem;
    box-sizing: border-box;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .49rem;
    border-top: .01rem solid $content-bgColor;
    &__item{
    flex: 1;
    text-align: center;
    a{
      color: $content-font-color;
      text-decoration: none;
    }
    .iconfont{
      margin: .07rem 0 .02rem 0 ;
      font-size: .18rem;
    }
      &--active{
        a{
          color: #1fa4fc;
        }
      }
  }
    &__title{
     font-size: .2rem;
     transform: scale(.5,.5);
     transform-origin: center top;
  }

  }
</style>
