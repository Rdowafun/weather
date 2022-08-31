<template>
  <div class="container" v-if="getFullWeather">
    <Header />
    <Main />
  </div>
  <div class="loading" v-else>
    <div class="spinner">
      <div class="set1">
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
      <div class="set2">
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Header,
    Main,
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
  computed: {
    ...mapGetters(["getFullWeather"]),
  },
  created() {
    setTimeout(() => this.getWeather("Tashkent"), 2990);
  },
};
</script>

<style>
</style>