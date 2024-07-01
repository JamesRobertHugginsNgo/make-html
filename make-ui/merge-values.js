const objectConstructor = ({}).constructor;

export default function mergeValues(value1, value2, options = {}) {
	if (value2 === undefined) {
		return value1;
	}

	if (
		value1 && value1.constructor && value1.constructor === objectConstructor
		&& value2 && value2.constructor && value2.constructor === objectConstructor
	) {
		const value = {};
		const keys = [...Object.keys(value1), ...Object.keys(value2)];
		for (let index = 0; index < keys.length; index++) {
			const key = keys[index];
			if (keys.indexOf(key) !== index) {
				continue;
			}
			value[key] = mergeValues(value1[key], value2[key], { ...options, key });
		}
		return value;
	}

	const { mergeFunctions } = options;
	if (mergeFunctions) {
		for (const mergeFunction of mergeFunctions) {
			const result = mergeFunction(value1, value2, options);
			if (result) {
				const { merged = false, value } = result;
				if (merged) {
					return value;
				}
			}
		}
	}

	return value2;
}
