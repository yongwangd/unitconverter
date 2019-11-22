import converter from '../data/converter';

const poundToGram = 453.59237;
const ounceToGram = 28.3495231;

describe('test converter', () => {
	test('1 pound should equal 453.59237 grams', () => {
		expect(converter([{ id: 'pound', value: 1 }], [])).toBe(poundToGram);
	});

	test('2 Pounds', () => {
		expect(converter([{ id: 'pound', value: 2 }], [])).toBe(poundToGram * 2);
	});
});
