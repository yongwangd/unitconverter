import { Unit, UnitCategory, CategoryConfig, UnitMapItem } from '../types';

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
		category: 'weight'
	},
	{
		id: 'kilogram',
		shortName: 'kg',
		fulName: 'Kilogram',
		rank: 30,
		metric: 'standard',
		category: 'weight'
	},
	{
		id: 'ounce',
		shortName: 'oz.',
		fulName: 'Ounce',
		rank: 10,
		metric: 'us',
		category: 'weight'
	},
	{
		id: 'pound',
		shortName: 'lbs',
		fulName: 'Pound',
		rank: 20,
		metric: 'us',
		category: 'weight'
	}
];

const unitMap: UnitMapItem[] = [
	// weight map
	{ from: 'kilogram', to: 'gram', value: 1000 },
	{ from: 'ounce', to: 'gram', value: 28.3495231 },
	{ from: 'pound', to: 'gram', value: 453.59237 },
	{ from: 'pound', to: 'ounce', value: 16 },
	{ from: 'kilogram', to: 'ounce', value: 35.27396195 },
	{ from: 'kilogram', to: 'pound', value: 2.204623 }
];

export { unitList, categoryConfigList };
