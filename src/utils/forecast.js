const request = require('request')

const forecast = (latitude , longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3e892f3dc6b14c4235f1050efcf9859b&query=' + latitude + ',' + longitude + '&units=m'

    request({ url , json: true} , (error , { body }) => {
        if (error) {
            callback('Unable to connect weather service!' , undefined)
        }  else if (body.error) {
            callback('Unable to find location!' , undefined)
        } else {
            callback(undefined , body.current.weather_descriptions[0] + ' It is currently ' +  body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast