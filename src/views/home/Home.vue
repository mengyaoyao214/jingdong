<template>
  <div class="wrapper">
    <StaticPart/>
    <Nearby/>
  </div>
  <Docker :currentIndex="0"/>
  </template>

<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby'
import Docker from '../../components/Docker'
export default {
  name: 'Home',
  components: { StaticPart, Nearby, Docker }
}
</script>
<style lang="scss"  scoped>
  .wrapper{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0.5rem;
    right: 0;
    padding: 0 .18rem .2rem .18rem;
    overflow-y: auto;

  }

  </style>
