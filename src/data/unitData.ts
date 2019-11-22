import { Unit, UnitCategory, CategoryConfig } from '../types';

const categoryConfigList: CategoryConfig[] = [
	{
		category: 'weight',
		baseUnit: 'g'
	},
	{
		category: 'length',
		baseUnit: 'cm'
	}
];

const unitList: Unit[] = [
	// Weight Units
	{ id: 'gram', shortName: 'g', fulName: 'Gram', category: 'weight' },
	{ id: 'kilogram', shortName: 'kg', fulName: 'Kilogram', category: 'weight' },
	{ id: 'ounce', shortName: 'oz.', fulName: 'Ounce', category: 'weight' },
	{ id: 'pound', shortName: 'lb', fulName: 'Pound', category: 'weight' }
];
