const idCounters = {};

export default function makeId(prefix) {
	if (!idCounters[prefix]) {
		idCounters[prefix] = 0;
	}
	return `${prefix}-${idCounters[prefix]++}`;
}
