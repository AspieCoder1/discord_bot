const request = require('request');
const axios = require('axios');

const geocode = address =>
	axios
		.get(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXNwaWVjb2RlciIsImEiOiJjanc3dWZsZTcwMDlhNGFscjN2ODRwcGc0In0.R1tiTt45mXQJiuECqs8lPA&limit=1`,
		)
		.then(({ data }) => ({
			latitude: data.features[0].center[0],
			longitude: data.features[0].center[1],
			location: data.features[0].place_name,
		}))
		.catch(err => ({ error: 'Something went wrong' }));

module.exports = geocode;
