const axios = require('axios/dist/node/axios.cjs');

export function cli(args) {
	axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=St.Louis&appid=${args[2]}`).
		then((response) => {
			let lat = response.data[0].lat;
			let lon = response.data[0].lon;

			axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${args[2]}&units=imperial`).
				then((response) => {
					console.log(response.data.main.temp);
				});
		})
}
