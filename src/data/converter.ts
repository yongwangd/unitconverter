import * as R from 'ramda';
import { categoryConfigList, unitList } from './unitData';
import { Unit, ConverterItem } from '../types';

function converter(from: ConverterItem[], to: ConverterItem[]) {
	const baseAmount = from
		.map(it => ({
			...it,
			unit: unitList.find(li => li.id === it.id)
		}))
		.reduce((accu, cur) => {
			const { unit, value } = cur;
			//@ts-ignore
			const { toBase } = unit;
			if (typeof toBase === 'number') {
				return accu + value * toBase;
			} else {
				return accu + toBase(value);
			}
		}, 0);

	return baseAmount;
}

export default converter;
