# make-html

Version 1.1.0-alpha

A single function for creating Document Fragment or HTML Elements.

## JS Delivr URL

https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@1.1.0-alpha/index.js

## Usage

``` JavaScript
import makeHtml from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@1.1.0-alpha/index.js';

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
    element.addEventListener('click', () => void console.log('CLICK'));
  }
});

document.body.append(element);
```
