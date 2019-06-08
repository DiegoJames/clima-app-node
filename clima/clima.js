const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f16c6b9af1b806877fdc71b3ec6661fc`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}