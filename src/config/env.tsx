import dotenv from 'dotenv';
dotenv.config();

const config = {
    API_TIMEOUT: Number(process.env.API_TIMEOUT) || 3000,
    WEATHER_API_URL: process.env.WEATHER_API_URL || 'https://weatherbit-v1-mashape.p.rapidapi.com/',
};

export default config;
