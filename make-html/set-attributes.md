# Set Attributes Documentation

[Source Code](https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0/make-html/set-attributes.js)

The `setAttributes` function allows you to set one or more attributes on a specified element using the `Element.setAttribute` method. Any attributes with `undefined` or `null` values will be ignored.

## Usage

### Importing the Function

To use the `setAttributes` function, import it from the CDN:

```javascript
import setAttributes from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0/make-html/set-attributes.js';
```

### Setting Attributes

You can then call the `setAttributes` function on any HTML element. Here's an example:

```javascript
const element = document.getElementById('id');
setAttributes(element, { 
  required: '',
  type: 'text'
});
```

In this example, the attributes `required`, and `type` are set on the element with the ID `id`. Attributes with empty string values (like `required`) are still set on the element.
