const { cli } = require('../src/cli.js')

describe('input validation', () => {
	test('throws if args not provided', () => {
		expect(async () => { await cli.cli({}); }).rejects.toThrow(Error);
	});

	test('throws if city, coordinates, or zipcode is not provided', () => {
		expect(async () => { await cli.cli({apiKey:"key"}); }).rejects.toThrow(Error);
	});

	test('throws if coordiantes are provided without latitude and longitude', () => {
		expect(async () => { await cli.cli({coordinates: []}); }).rejects.toThrow(Error);
	});
});
