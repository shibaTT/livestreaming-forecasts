<script lang="ts" setup>
async function getWeather() {
    const { data } = await useAsyncData(() => $fetch("/api/getWeatherData"));
    return data;
}

const weather = getWeather();

console.log(weather);
</script>

<template>
    <WeatherItem />
</template>
