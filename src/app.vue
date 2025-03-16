<script lang="ts" setup>
import { WeatherData } from "@/types/types";
function getWeather(): WeatherData {
    const { data }: any = useAsyncData(() => $fetch("/api/getWeatherData"));
    return data.value;
}

const weathers = getWeather();
</script>

<template>
    <WeatherItem :weathers="weathers" />
</template>
