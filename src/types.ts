export type MetricSystem = 'standard' | 'us' | 'uk';

type SingleUnitCvtFn = (a: number) => number;

export type UnitCategory =
	| 'length'
	| 'temperature'
	| 'area'
	| 'weight'
	| 'volumn';

export type UnitId = 'gram' | 'kilogram' | 'ounce' | 'pound';

export type Unit = {
	id: UnitId;
	fulName: string;
	shortName: string;
	rank: number;
	metric: MetricSystem;
	category: UnitCategory;
};

export type CategoryConfig = {
	category: UnitCategory;
	baseUnit: string;
	allowSubUnit: boolean;
};

export type UnitMapItem = {
	from: UnitId;
	to: UnitId;
	value: number;
};

export type ConverterItem = [UnitId, number];
