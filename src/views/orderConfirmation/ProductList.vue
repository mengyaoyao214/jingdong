<template>
      <div class="products">
      <div class="products__title">
        {{ shopName }}
      </div>
      <div class="products__wrapper">
      <div class="products__list">
        <div
        class="products__item"
        v-for="item in productList"
        :key="item._id"
        >
          <img class="products__item__img" :src="item.imgUrl">
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__ren">&yen; </span>
                {{item.price}} × {{item.count}}
              </span>
              <span class="products__item__total">
                <span class="products__item__ren">&yen;</span>
                {{(item.price * item.count).toFixed(2)}}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

export default {
  name: 'ProductList',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { productList, shopName } = useCommonCartEffect(shopId)
    return { productList, shopName }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.products{
  margin: .16rem .18rem .1rem .18rem;
  background: $bgColor;
  &__title {
    font-size: .16rem;
    padding: .16rem;
    color: $content-font-color;
  }
  &__wrapper{
    overflow-y: scroll;
    margin: 0 .18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;

  }
  &__list {
    background: $bgColor;
  }
  &__item{
    position: relative;
    display: flex;
    padding: .0 .16rem .16rem .16rem;
    &__img{
      width: .46rem;
      height:.46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-font-color;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: .04rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__total {
      text-align: right;
      flex: 1;
      color: $dark-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
  }
}
</style>
