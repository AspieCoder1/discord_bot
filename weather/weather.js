const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// weather = address =>
// 	geocode(address, (error, { latitude, longitude, location }) => {
// 		if (error) {
// 			return console.log('Error', error);
// 		}
// 		forecast(latitude, longitude, (error, forecastData) => {
// 			if (error) {
// 				return console.log(error);
// 			}
// 			const result = {
// 				location,
// 				forecastData,
// 			};
// 			console.log(result);
// 			return result;
// 		});
//     });

const weather = async address => {
	try {
		const { latitude, longitude, location } = await geocode(address);
		console.log(latitude, longitude);
		const { forecastData } = await forecast(latitude, longitude);
		return {
			forecastData,
			location,
		};
	} catch (err) {
		console.log(err);
	}
};
module.exports = weather;
