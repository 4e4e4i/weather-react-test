export default class WeatherService {

    _apiBase = 'https://api.openweathermap.org/data/2.5/find?q=';
    _apiKey = '&APPID=54795f00a49de9d54e952c6a88995e7c';
    _apiMetric = '&units=metric';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}${this._apiKey}${this._apiMetric}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();

    };

    getCity = async (city) => {
        const trCity = await this.getResource(`${city}`);
        if ( city === '') {
            return
        }
        return trCity.list;
    };

    _transformCity = (data) => {
        return {
            id: data.id,
            name: data.name + ', ' + data.sys.country,
            data: data
        }
    }

}
