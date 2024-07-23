import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error)
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message)
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
         Без параметров - вывод погоды
         -s [CITY] для установки погоды
         -h для вывода помощи
         -t [API_KEY] для сохранения токена
         `
    )
}

const printWeather = (weather) => {
    console.log(
        dedent`Погода сегодня ${chalk.bgGreenBright.black(`${weather?.name}`)}
         Температура: ${weather?.main?.temp}
         Чувствуется как: ${weather?.main?.feels_like}
         Влажность: ${weather?.main?.humidity}
         Скорость ветра: ${weather?.wind?.speed}
         ${weather?.weather?.map(item => item.description)}
         `
    )
}

export {printError, printSuccess, printHelp, printWeather}