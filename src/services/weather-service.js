export default class WeatherService {

    _apiBase = 'https://api.openweathermap.org/data/2.5/find?q=';
    _apiKey = '&APPID=54795f00a49de9d54e952c6a88995e7c';
    _apiMetric = '&units=metric';

    cities = [
        {
            id: 1,
            name: 'Краснодар'
        },
        {
            id: 2,
            name: 'Сочи'
        },
        {
            id: 3,
            name: 'Москва'
        }
    ];

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}${this._apiMetric}${this._apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();

    };

    getCities() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.cities)
            }, 700);
        });
    }
}
