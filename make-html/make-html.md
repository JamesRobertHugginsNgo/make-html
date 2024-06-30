## Make HTML Documentation

[Source Code](https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0/make-html/make-html.js)

The `makeHtml` function allows you to create an HTML element using a single function call. This function accepts an object that describes the element and its children.

## Usage

### Importing the Function

To use the `makeHtml` function, import it from the CDN:

```javascript
import makeHtml from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.0.0/make-html/make-html.js';
```

### Creating an Element

You can create an element by passing an object to the `makeHtml` function. Here's an example:

```javascript
const element = makeHtml({
  name: 'div',
  attributes: { id: 'div-id' },
  classes: ['div-class'],
  styles: { 
    backgroundColor: 'lightgrey',
    padding: '1rem'
  },
  children: [
    'Hello',
    [
      ' ',
      {
        name: 'strong',
        children: ['World']
      }
    ]
  ],
  callback(element) {
    element.addEventListener('click', () => console.log('CLICK'));
  }
});
document.body.append(element);
```

In this example, a `div` element is created with the following properties:

- **Attributes**: An ID of `div-id`.
- **Classes**: A class of `div-class`.
- **Styles**: A background color of light grey and padding of 1rem.
- **Children**: The text node `'Hello'`, a space, and a `strong` element containing the text `'World'`.
- **Callback**: An event listener that logs `'CLICK'` to the console when the element is clicked.

The created element is then appended to the document body.
