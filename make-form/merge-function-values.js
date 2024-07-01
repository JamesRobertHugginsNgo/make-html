export default function mergeFunctionValues(value1, value2) {
	if (typeof value1 === 'function' && typeof value2 === 'function') {
		return {
			merged: true,
			value: function(...args) {
				value1.call(this, ...args);
				value2.call(this, ...args);
			}
		}
	}
}
