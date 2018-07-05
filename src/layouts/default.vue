<template>
  <q-layout view="lHh Lpr fff">
    <!-- <preLoader></preLoader> -->
    <heador></heador>
    <!-- DRAWER IS INSIDE HEADOR -->
    <q-page-container>
      <transition appear enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in" duration="900">
        <router-view />
      </transition>
    </q-page-container>
    <q-btn v-back-to-top.animate="{offset: 500, duration: 200}" round color="primary" class="fixed-bottom-right animate-pop goHomeBtn" style="margin: 0 15px 15px 0">
      <q-icon name="keyboard_arrow_up" /> </q-btn>
    <footor></footor>
  </q-layout>
</template>


<script>
// import animations in quasar !
// import preLoader from '../myM/preLoader.vue'

import heador from './0_header.vue'
import footor from './0_footer.vue'

export default {
  components: {
    // preLoader,
    heador,
    footor
  },
}
</script>


<style>
.goHomeBtn {
  z-index: 10;
}
</style>
