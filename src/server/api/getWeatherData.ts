import { WeatherData } from "@/types/types";

export default defineEventHandler(async (event) => {
    const baseUrl: string = "http://api.weatherapi.com/v1/forecast.json?";
    const API_KEY: string = useRuntimeConfig().API_KEY;
    const location: Array<string> = ["Sapporo", "Tokyo", "Nagoya", "Osaka", "Fukuoka"];
    const params: Record<string, string> = {
        key: API_KEY,
        days: "2",
        aqi: "no",
        alerts: "no",
    };
    const query = new URLSearchParams(params);
    const response: WeatherData = [];

    await Promise.all(
        location.map(async (target) => {
            await fetch(baseUrl + query + `&q=${target}`)
                .then((res) => res.json())
                .then((data) => response.push(data));
        })
    )
        .then(() => {
            return response;
        })
        .catch(() => {
            console.log("error");
            return;
        });

    // const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Tokyo`);
    // const pos = await res.json();

    return response;
});
