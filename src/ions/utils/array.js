/**
 *
 * @param {Record<string, number | unknown>[]} array
 * @param {string} key
 * @return {number}
 */
export const countByKey = (array, key) =>
	array.reduce((previousValue, { [key]: currentValue }) => previousValue + currentValue, 0);
