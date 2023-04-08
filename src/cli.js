const axios = require('axios/dist/node/axios.cjs');

export function cli(args) {
	axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${args.city}&appid=${args.apiKey}`).
		then((response) => {
			let lat = response.data[0].lat;
			let lon = response.data[0].lon;

			axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${args.apiKey}&units=imperial`).
				then((response) => {
					console.log(`The current temperature in ${args.city} is ${response.data.main.temp}`);
				});
		})
}
