<template>
  <div class="main__week-day">
    <h3 class="main__week-title">{{ getWeekDay }}</h3>
    <p class="main__week-date">{{ getDay }} {{ getMonth }}</p>
    <div class="main__week-img">
      <img src="@/assets/images/sun.svg" alt="sun" v-if="descr == 'ясно'" />
      <img
        src="@/assets/images/cloud.svg"
        alt="cloud"
        v-else-if="descr == 'пасмурно'"
      />
      <img
        src="@/assets/images/minirain.svg"
        alt="minirain"
        v-else-if="descr == 'небольшой дождь'"
      />
      <img
        src="@/assets/images/sunrain.svg"
        alt="sunrain"
        v-else-if="descr == 'облачно с прояснениями'"
      />
      <img
        src="@/assets/images/minicloud.svg"
        alt="minicloud"
        v-else-if="descr == 'небольшая облачность'"
      />
      <img
        src="@/assets/images/minicloud.svg"
        alt="minicloud"
        v-else-if="descr == 'переменная облачность'"
      />
      <img
        src="@/assets/images/rain.svg"
        alt="rain"
        v-else-if="descr == 'дождь'"
      />
    </div>
    <p class="main__week-temp">{{ Math.round(day.temp.day) }}°</p>
    <p class="main__week-descr">{{ day.weather[0].description }}</p>
  </div>
</template>

<script>
import unix from "@/timestamp.js";
export default {
  props: {
    day: Object,
  },
  computed: {
    getWeekDay() {
      return unix(this.day.dt, "weekday");
    },
    getDay() {
      return unix(this.day.dt, "day");
    },
    getMonth() {
      return unix(this.day.dt, "moonth");
    },
    descr() {
      return this.day.weather[0].description;
    },
  },
};
</script>

<style>
</style>