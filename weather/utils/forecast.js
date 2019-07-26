const request = require('request');
const axios = require('axios');
// const forecast = (lat, long, callback) => {
// 	const url = `https://api.darksky.net/forecast/1a4ca1c05d0c84f74ab52c4147abb827/${lat},${long}?units=uk2`;
// 	request({ url, json: true }, (error, { body }) => {
// 		if (error) {
// 			return callback('Unable to connect to weather service!', undefined);
// 		} else if (body.error) {
// 			return callback('Unable to find location data', undefined);
// 		} else {
// 			const data = `${body.daily.data[0].summary} It is currently ${
// 				body.currently.temperature
// 			} degress out. There is a ${
// 				body.currently.precipProbability
// 			}% chance of rain.`;
// 			return callback(undefined, data);
// 		}
// 	});
// };

const forecast = (lat, long) =>
	axios
		.get(
			`https://api.darksky.net/forecast/1a4ca1c05d0c84f74ab52c4147abb827/${lat},${long}?units=uk2`,
		)
		.then(({ data }) => {
			const res = `${data.daily.data[0].summary} It is currently ${
				data.currently.temperature
			} degress out. There is a ${
				data.currently.precipProbability
			}% chance of rain.`;
			return {
				forecastData: res,
			};
		})
		.catch(err => ({
			error: 'something went wrong',
		}));

module.exports = forecast;
