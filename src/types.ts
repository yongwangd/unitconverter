export type MetricSystem = 'standard' | 'us' | 'uk';

type SingleUnitCvtFn = (a: number) => number;

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
	rank: number;
	metric: MetricSystem;
	category: UnitCategory;
	toBase: number | SingleUnitCvtFn;
};

export type CategoryConfig = {
	category: UnitCategory;
	baseUnit: string;
	allowSubUnit: boolean;
};

export type ConverterItem = {
	id: string;
	value: number;
};
