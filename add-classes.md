# Add Classes Documentation

[Source Code](https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0/add-classes.js)

The `addClasses` function allows you to add multiple class names to an element using the `Element.classList.add` method. Any `undefined` or `null` values in the array will be ignored.

## Usage

### Importing the Function

To use the `addClasses` function, import it from the CDN:

```javascript
import addClasses from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0/add-classes.js';
```

### Adding Classes

You can then call the `addClasses` function on any HTML element. Here's an example:

```javascript
const element = document.getElementById('id');
addClasses(element, ['element-class-1', 'element-class-2']);
```

In this example, the classes `element-class-1` and `element-class-2` are added to the element with the ID `id`. Any `undefined` or `null` values in the array will be ignored.
