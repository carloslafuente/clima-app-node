const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
	direction: {
		alias: 'd',
		desc: 'Descripcion de la ciudad para obtener el clima',
		demand: true,
	},
}).argv;

// lugar.getLugarLatLng(argv.direction).then(
//   resp => {
//     console.log(resp);
//   }
// );

// clima
// 	.getClima(40.75, -74.0)
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// const getInfo = (direction) => {
// 	lugar
// 		.getLugarLatLng(direction)
// 		.then((res) => {
// 			clima
// 				.getClima(res.lat, res.lng)
// 				.then((res) => {
// 					return res;
// 				})
// 				.catch((err) => {
// 					return err;
// 				});
// 		})
// 		.catch((err) => {
// 			return err;
// 		});
// };

// const getInfo = async (direction) => {
// 	const lug = await lugar
// 		.getLugarLatLng(direction)
// 		.then((res) => {
//       return res
//     })
// 		.catch((err) => {
// 			return err;
// 		});

//   const cli = await clima
// 		.getClima(lug.lat, lug.lng)
// 		.then((res) => {
// 			return res;
// 		})
// 		.catch((err) => {
// 			return err;
//     });
//   return {
//     direction,
//     cli,
//     lug
//   };
// };

// getInfo(argv.direction)
// 	.then((res) => {
// 		console.log(`El clima de ${res.direction} es de ${res.cli}`);
// 	})
// 	.catch((err) => {
// 		console.log(`No se pudo determinar el clima de ${argv.direction}, Erro: `,err);
// 	});

const getInfo = async (direccion) => {
	try {
		const coords = await lugar.getLugarLatLng(direccion);
		const temp = await clima.getClima(coords.lat, coords.lng);
		return `El clima de ${coords.direccion} es de ${temp}`;
	} catch (error) {
		return `No se pudo determinar el clima de ${direccion}`;
	}
};

getInfo(argv.direction)
	.then(console.log)
  .catch(console.log);
  

