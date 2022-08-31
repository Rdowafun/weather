<template>
  <div class="main__content">
    <div class="main__content-left">
      <p class="main__content-degree">
        {{ Math.round(getFullWeather.current.temp) }}°
      </p>
      <p class="main__content-today">Сегодня</p>
      <p class="main__content-time">Время: {{getHours}}:{{getMinutes}}</p>
      <p class="main__content-city">Город: {{ getFullWeather.name }}</p>
      <div class="main__content-img">
        <img
          src="@/assets/images/sun.svg"
          alt="sun"
          v-if="description == 'ясно'"
        />
        <img
          src="@/assets/images/cloud.svg"
          alt="cloud"
          v-else-if="description == 'пасмурно'"
        />
        <img
          src="@/assets/images/minirain.svg"
          alt="minirain"
          v-else-if="description == 'небольшой дождь'"
        />
        <img
          src="@/assets/images/sunrain.svg"
          alt="sunrain"
          v-else-if="description == 'облачно с прояснениями'"
        />
        <img
          src="@/assets/images/minicloud.svg"
          alt="minicloud"
          v-else-if="description == 'небольшая облачность'"
        />
        <img
          src="@/assets/images/minicloud.svg"
          alt="minicloud"
          v-else-if="description == 'переменная облачность'"
        />
        <img
          src="@/assets/images/rain.svg"
          alt="rain"
          v-else-if="description == 'дождь'"
        />
      </div>
    </div>
    <div class="main__content-right">
      <img src="@/assets/images/headerBg.svg" alt="" class="main__content-bg" />
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/temp.svg" alt="" />
        </div>
        <span>Температура</span>
        <span class="main__content-temp"
          >{{ Math.round(getFullWeather.current.temp) }}° - ощущается как
          {{ Math.round(getFullWeather.current.feels_like) }}°</span
        >
      </div>
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/davlenie.svg" alt="" />
        </div>
        <span>Давление</span>
        <span class="main__content-temp"
          >{{ getFullWeather.current.pressure }} мм ртутного столба -
          {{
            getFullWeather.current.pressure >= 1000 &&
            getFullWeather.current.pressure <= 1010
              ? "нормальное"
              : getFullWeather.current.pressure < 1000
              ? "пониженное"
              : getFullWeather.current.pressure > 1010
              ? "повышенное"
              : ""
          }}</span
        >
      </div>
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/osadki.svg" alt="osadki" />
        </div>
        <span>Влажность</span>
        <span class="main__content-temp"
          >{{ getFullWeather.current.humidity }}%</span
        >
      </div>
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/wind.svg" alt="wind" />
        </div>
        <span>Ветер</span>
        <span class="main__content-temp"
          >{{ getFullWeather.current.wind_speed }} м/с юго-запад -
          {{
            getFullWeather.current.wind_speed >= 0.3 &&
            getFullWeather.current.wind_speed <= 1.5
              ? "тихий"
              : getFullWeather.current.wind_speed >= 1.6 &&
                getFullWeather.current.wind_speed <= 3.3
              ? "лёгкий ветер"
              : getFullWeather.current.wind_speed >= 3.4 &&
                getFullWeather.current.wind_speed <= 5.4
              ? "слабый ветер"
              : getFullWeather.current.wind_speed >= 5.5 &&
                getFullWeather.current.wind_speed <= 7.9
              ? "умеренный ветер"
              : getFullWeather.current.wind_speed >= 8.0 &&
                getFullWeather.current.wind_speed <= 10.7
              ? "свежий ветер"
              : getFullWeather.current.wind_speed >= 10.8 &&
                getFullWeather.current.wind_speed <= 13.8
              ? "сильный ветер"
              : getFullWeather.current.wind_speed >= 13.9 &&
                getFullWeather.current.wind_speed <= 17.1
              ? "крепкий ветер"
              : getFullWeather.current.wind_speed >= 17.2 &&
                getFullWeather.current.wind_speed <= 20.7
              ? "очень крепкий ветер"
              : getFullWeather.current.wind_speed >= 20.8 &&
                getFullWeather.current.wind_speed <= 24.4
              ? "шторм"
              : getFullWeather.current.wind_speed >= 24.5 &&
                getFullWeather.current.wind_speed <= 28.4
              ? "сильный шторм"
              : getFullWeather.current.wind_speed >= 28.5 &&
                getFullWeather.current.wind_speed <= 32.6
              ? "жестокий шторм"
              : getFullWeather.current.wind_speed >= 32.7
              ? "ураган"
              : ""
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import unix from "@/timestamp.js";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getFullWeather"]),
    description() {
      return this.getFullWeather.current.weather[0].description;
    },

    getHours(){
      return unix(this.getFullWeather.current.dt, "hours");
    },
    getMinutes(){
      return unix(this.getFullWeather.current.dt, "min");
    },
  },
};
</script>

<style>
</style>