import { Forecast } from '../services/api/weather/weather.types';
import { Options } from '../types';

export const calculateSixPackBeersQuantity = (people: number, temperature: number): number => {
    let drink = 0;
    if (temperature >= 20 || temperature <= 24) {
        drink = people * 1;
    }
    if (temperature < 20) {
        drink = people * 0.75;
    }
    if (temperature > 24) {
        drink = people * 2;
    }
    const pack = drink / 6;
    return Math.ceil(pack);
};

export const convertWeather = (weatherResponseApi: Forecast[]): Options[] => {
    return weatherResponseApi.map((weather) => {
        return { name: weather.valid_date, value: weather.temp };
    });
};
