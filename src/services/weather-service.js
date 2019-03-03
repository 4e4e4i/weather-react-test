export default class WeatherService {

    _apiBase = 'https://api.openweathermap.org/data/2.5/find?q=';
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
        const res = await fetch(`${this._apiBase}${url}${this._apiKey}${this._apiMetric}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();

    };

    addCity = async (city) => {
        const data = await this.getResource(`${city}`);
        const transformCity =  data.list[0];
        if ( city === '') {
            return;
        }
        const lskey = `${this._lsPrefix}` + transformCity.id;
        if (!localStorage.getItem(lskey)) {
            localStorage.setItem(lskey, JSON.stringify(transformCity));
        }
        return transformCity;
    };
}
