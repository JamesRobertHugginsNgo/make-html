# Append Children Documentation

[Source Code](https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0/make-html/append-children.js)

The `appendChildren` function allows you to append one or more text nodes or HTML elements to another HTML element using the `Element.append` method.

When using `makeHtml` definitions, it leverages the [makeHtml module](./make-html.md) to create document fragments or HTML elements. Any `undefined` or `null` values in the array will be ignored.

## Usage

### Importing the Function

To use the `appendChildren` function, import it from the CDN:

```javascript
import appendChildren from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0/make-html/append-children.js';
```

### Appending Children

You can then call the `appendChildren` function on any HTML element. Here's an example:

```javascript
const element = document.getElementById('id');
appendChildren(element, [
  'Hello',
  [
    ' ',
    {
      name: 'strong',
      children: ['World']
    }
  ]
]);
```

In this example, the text node `'Hello'`, a space, and a `strong` element containing the text `'World'` are appended to the element with the ID `id`. Any `undefined` or `null` values in the array will be ignored.
