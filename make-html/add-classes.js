export default function addClasses(element, classes) {
	const value = classes.filter((className) => {
		return className != null;
	});
	element.classList.add(...value);
}
