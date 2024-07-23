import {getKeyValue, TOKEN_DICTIONARY} from "./storage-service.js";
import axios from "axios";

const getWeather = async () => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    const city = await getKeyValue(TOKEN_DICTIONARY.city)
    if (!token) {
        throw new Error('Не задан токен, задайте его через команду -t')
    }

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        },
        headers: {
            'User-Agent': 'Mozilla/5.0', // Mimic a web browser's User-Agent
        },
    })

    return data
}

export {getWeather}