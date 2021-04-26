/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApisauceInstance, create, ApiResponse } from 'apisauce';
import { getGeneralApiProblem } from '../api.problem';
import * as Types from './weather.types';
import { ApiConfig, DEFAULT_API_CONFIG } from '../api.types';

export class WeatherApi {
    private apisauce: ApisauceInstance;

    private config: ApiConfig;

    constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
        this.config = config;
    }

    setup(): void {
        // construct the apisauce instance
        this.apisauce = create({
            baseURL: this.config.url,
            timeout: this.config.timeout,
            headers: {
                'x-rapidapi-key': '0dca3afad9msh97073b645779af1p17e5aejsn099c61cdd2d3',
                'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
                useQueryString: true,
            },
        });
    }

    /**
     * Get forecast.
     */
    async getForecast(): Promise<Types.GetForecastResult> {
        // make the api call

        const response: ApiResponse<any> = await this.apisauce.post(`/forecast/daily`, {
            lat: '-34.603722',
            lon: '-58.381592',
            units: 'metric',
            lang: 'es',
        });

        //the typical ways to die when calling an api
        if (!response.ok) {
            const problem = getGeneralApiProblem(response);
            if (problem) return problem;
        }

        // transform the data into the format we are expecting
        try {
            return { kind: 'ok', weather: response.data };
        } catch {
            return { kind: 'bad-data' };
        }
    }
}
