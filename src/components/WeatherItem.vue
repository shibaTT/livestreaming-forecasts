<script lang="ts" setup>
interface Props {
    weather: Array<Record<string, string>>;
}

const props = withDefaults(defineProps<Props>(), {
    weather: () => [{ location: "location" }],
});
</script>

<template>
    <div class="p-weatherItem">
        <div class="p-weatherItem__item" v-for="weather in props.weather">{{ weather.location }}</div>
    </div>
</template>
