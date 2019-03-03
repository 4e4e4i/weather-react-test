export default class WeatherService {

    _apiBase = 'https://api.openweathermap.org/data/2.5/weather';
    _apiKey = '&APPID=54795f00a49de9d54e952c6a88995e7c';
    _apiMetric = '&units=metric';
    _lsPrefix = 'cities-';

    fetchCities = () => {
        let cities = [];
        if (localStorage.length) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf(`${this._lsPrefix}`) !== -1) {
                    cities.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                }
            }
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(cities);
            }, 700);
        })
    };

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}?q=${url}${this._apiKey}${this._apiMetric}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    addCity = async (city) => {
        if (city === '') return;
        const data = await this.getResource(city);

        const lskey = `${this._lsPrefix}` + data.id;
        if (!localStorage.getItem(lskey)) {
            localStorage.setItem(lskey, JSON.stringify(data));
        }
        return data;
    };

    getCityByCurrentPosition = async (lon, lat) => {
        const res = await fetch(`${this._apiBase}?lat=${lat}&lon=${lon}${this._apiKey}${this._apiMetric}`);
        const json = res.json();
        console.log(json);
    }
}
