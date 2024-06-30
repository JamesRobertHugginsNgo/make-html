# Set Styles Documentation

[Source Code](https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0/make-html/set-styles.js)

The `setStyles` function allows you to add styles to an element using the `Element.style` property. Any `undefined` or `null` values will be ignored.

## Usage

### Importing the Function

To use the `setStyles` function, import it from the CDN:

```javascript
import setStyles from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0/make-html/set-styles.js';
```

### Setting Styles

You can then call the `setStyles` function on any HTML element. Here's an example:

```javascript
const element = document.getElementById('id');
setStyles(element, { 
  backgroundColor: 'lightgrey',
  padding: '1rem'
});
```

In this example, the styles `backgroundColor` and `padding` are applied to the element with the ID `id`. Any `undefined` or `null` values in the styles object will be ignored.
