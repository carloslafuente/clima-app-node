const axios = require('axios').default;

const getLugarLatLng = async (dir) => {
	const encondedUrl = encodeURI(dir);

	const instance = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondedUrl}`,
		headers: {
			'x-rapidapi-key': 'c22db45a15msh8cdad1a3022460ep16c09fjsne2965ed366fd',
		},
  });
  
  const resp = await instance.get();

  if(resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;
    
    return {
      direccion,
      lat,
      lng
    }
};

module.exports = {
  getLugarLatLng,
}
