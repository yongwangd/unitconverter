import { Unit, UnitCategory, CategoryConfig } from '../types';

const categoryConfigList: CategoryConfig[] = [
	{
		category: 'weight',
		baseUnit: 'gram',
		allowSubUnit: true
	},
	{
		category: 'length',
		baseUnit: 'cm',
		allowSubUnit: true
	}
];

const unitList: Unit[] = [
	// Weight Units
	{
		id: 'gram',
		shortName: 'g',
		fulName: 'Gram',
		rank: 0,
		metric: 'standard',
		toBase: 1,
		category: 'weight'
	},
	{
		id: 'kilogram',
		shortName: 'kg',
		fulName: 'Kilogram',
		rank: 30,
		metric: 'standard',
		toBase: 1000,
		category: 'weight'
	},
	{
		id: 'ounce',
		shortName: 'oz.',
		fulName: 'Ounce',
		rank: 10,
		metric: 'us',
		toBase: 28.3495231,
		category: 'weight'
	},
	{
		id: 'pound',
		shortName: 'lbs',
		fulName: 'Pound',
		rank: 20,
		metric: 'us',
		toBase: 453.59237,
		category: 'weight'
	}
];

export { unitList, categoryConfigList };
