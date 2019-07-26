const request = require('request');
const axios = require('axios');

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
