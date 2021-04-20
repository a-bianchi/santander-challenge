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
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }

    /**
     * Get forecast.
     */
    async getForecast(): Promise<Types.GetForecastResult> {
        // make the api call

        const response: ApiResponse<Types.GetForecastResult> = await this.apisauce.get(
            `/current.json?key=c30af8794534403697e55205211904&q=Argentina&aqi=no`,
        );

        // the typical ways to die when calling an api
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
