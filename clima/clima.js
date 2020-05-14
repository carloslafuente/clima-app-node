const axios = require('axios').default;

const getClima = async(lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=488f19a2db3de10752f0018e38f87ec7`);
  
  return resp.data.main.temp;
}

module.exports = {
  getClima,
}
