export type UnitCategory =
	| 'length'
	| 'temperature'
	| 'area'
	| 'weight'
	| 'volumn';

export type Unit = {
	id: string;
	fulName: string;
	shortName: string;
	category: UnitCategory;
};

export type CategoryConfig = {
	category: UnitCategory;
	baseUnit: string;
};
