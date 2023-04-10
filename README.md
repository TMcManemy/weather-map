## Built With

node version 19.8.1
npm version 9.5.1

## Installation

From the project root directory, run:
'npm install`
`npm link`

## Running Tests

From the project root directory, run:
`npm test`

## Sample Commands

### Query by city name
`wm -ci St.Louis -k <api key>`

### Query by zip code
`wm -z 63116 -k <api key>`

### Query by coordinates (latitude and longitude, respectively)
`wm -co 38.6318657 --coordinates=-90.2428756 -k <api key>`

### Returns
`The current temperature in ${cityName} is ${temperatureInFahrenheit}`
