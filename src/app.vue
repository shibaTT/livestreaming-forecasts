<script lang="ts" setup>
function getWeather(): Array<Record<string, string>> {
    const { data }: any = useAsyncData(() => $fetch("/api/getWeatherData"));
    return data.value;
}

const weather = getWeather();
</script>

<template>
    <WeatherItem :weather="weather" />
</template>
