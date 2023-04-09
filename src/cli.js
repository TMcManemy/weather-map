const axios = require('axios/dist/node/axios.cjs');

export async function cli(args) {
	validateArguments(args);

	args = await setArguments(args);

	let weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${args.coordinates[0]}&lon=${args.coordinates[1]}&appid=${args.apiKey}&units=imperial`);

	console.log(`The current temperature in ${args.city} is ${weather.data.main.temp}`);
}

function validateArguments(args){
	if(!(args.city || args.coordinates || args.zipcode))
		throw new Error('city, coordinates, or zipcode is required');

	if(args.coordinates && args.coordinates.length !== 2)
		throw new Error('latitude and longitude coordinates are expected');
}

async function setArguments(args) {
	if (args.city) {
		let geo = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${args.city}&appid=${args.apiKey}`);
		args.coordinates = [];
		args.coordinates[0] = geo.data[0].lat;
		args.coordinates[1] = geo.data[0].lon;
		args.city = geo.data[0].name;
	}
	else if (args.zipcode) {
		let geo = await axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${args.zipcode}&appid=${args.apiKey}`);
		args.coordinates = [];
		args.coordinates[0] = geo.data.lat;
		args.coordinates[1] = geo.data.lon;
		args.city = geo.data.name;
	}
	else {
		let geo = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${args.coordinates[0]}&lon=${args.coordinates[1]}&appid=${args.apiKey}`);
		args.city = geo.data[0].name;
	}

	return args;
}
