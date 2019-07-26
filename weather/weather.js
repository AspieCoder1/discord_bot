const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
		return err;
	}
};
module.exports = weather;
