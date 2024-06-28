<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link :to="`/shop/${item.id}`" v-for="item in nearbyList" :key="item.id">
    <ShopInfo :item="item"
    />
  </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '@/components/ShopInfo.vue'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/hot-list')
    console.log(result)
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}
export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style lang="scss"  scoped>
  @import '../../style/viriables.scss';
  @import '../../style/mixins.scss';
 .nearby {
    &__title {
      margin: .16rem 0 .02rem 0;
      font-size:.18rem;
      font-weight: normal;
      color: $content-font-color
    }
    }
    a{
      text-decoration: none;
    }
</style>
