import * as R from 'ramda';
import { categoryConfigList, unitList } from './unitData';
import { Unit, ConverterItem } from '../types';

// type ConvertToBaseFn = (fromUnits: ConverterItem[]) => number;

// const convertToBase: ConvertToBaseFn = R.pipe(
// 	R.map(([id, value]) => {
// 		const { toBase } = R.find(R.propEq('id', id), unitList) as Unit;
// 		return typeof toBase === 'function' ? toBase(value) : value * toBase;
// 	}),
// 	R.sum
// );

// function converter(from: ConverterItem[], to: string[]) {
// 	const baseAmount = from
// 		.map(it => ({
// 			...it,
// 			unit: unitList.find(li => li.id === it.id)
// 		}))
// 		.reduce((accu, cur) => {
// 			const { unit, value } = cur;
// 			//@ts-ignore
// 			const { toBase } = unit;
// 			if (typeof toBase === 'number') {
// 				return accu + value * toBase;
// 			} else {
// 				return accu + toBase(value);
// 			}
// 		}, 0);

// 	return baseAmount;
// }

// export default converter;
