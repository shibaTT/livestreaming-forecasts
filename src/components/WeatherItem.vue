<script lang="ts" setup>
import type { WeatherData } from "@/types/types";
interface Props {
    weathers: WeatherData;
}

const props = withDefaults(defineProps<Props>(), {
    weathers: () => [],
});

const locationNameMap = {
    Sapporo: "札幌",
    Tokyo: "東京",
    Nagoya: "名古屋",
    Osaka: "大阪",
    Fukuoka: "福岡",
};
</script>

<template>
    <div class="p-weatherItem">
        <div class="p-weatherItem__item" v-for="weather in props.weathers">
            <h2 class="p-weatherItem__title">
                {{ locationNameMap[weather.location.name] || weather.location.name }}
            </h2>
            {{ weather.location }}
        </div>
    </div>
</template>
