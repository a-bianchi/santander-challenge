import config from '../../config/env';

/**
 * The options used to configure the API.
 */
export interface ApiConfig {
    /**
     * The URL of the api.
     */
    url: string;

    /**
     * Milliseconds before we timeout the request.
     */
    timeout: number;
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
    url: config.WEATHER_API_URL,
    timeout: config.API_TIMEOUT,
};
