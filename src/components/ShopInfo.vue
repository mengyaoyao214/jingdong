<template>
  <div class="shop">
    <img  class="shop__img " :src="item.imgUrl">
    <div :class="{'shop__content':true, 'shop__content--bordered':hideBorder ? false: true}">
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月售：{{ item.sales }}</span>
        <span class="shop__content__tag">起送：{{ item.expressLimit }}</span>
        <span class="shop__content__tag">基础运费：{{ item.expressPrice }}</span>
      </div>
      <div class="shop__content__hightlight">
        {{item.slogan}}
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.shop{
  display: flex;
  padding-top: .12rem;
  &__img{
    width: .56rem;
    height: .56rem;
    margin-right: .16rem;
  }
  &__content {
  flex: 1;
  &--bordered {
    border-bottom: .01rem solid $content-bgColor;
  }
  padding-bottom: .12rem;
  &__title{
    line-height: .22rem;
    font-size: .16rem;
    color:$content-font-color
  }
  &__tags{
    margin-top: .08rem;
    line-height: .18rem;
    font-size: .13rem;
    color:$content-font-color;
  }
  &__tag{
    margin-right: .16rem;
  }
  &__hightlight {
    color:$hightlight-fontColor;
    line-height: .18rem;
    font-size: .13rem;
    margin: .08rem 0 0 0;
  }
  }
}

</style>
