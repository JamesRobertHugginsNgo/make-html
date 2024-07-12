# Make HTML

**Version:** 2.1.1

## Bundle

Import the necessary modules from the bundled package:

```javascript
import { addClasses, appendChildren, makeHtml, setAttributes, setStyles } from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.1.1/src/index.js';
```

## Add Classes Module

This module allows you to add multiple classes to an HTML element, filtering out any `undefined` or `null` values.

```javascript
import addClasses from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.1.1/src/add-classes.js';

const element = document.createElement('div');
const classes = ['class1', null, 'class2', undefined, 'class3'];
addClasses(element, classes); // OUTPUT: <div class="class1 class2 class3"></div>
```

## Make HTML Module

Create complex HTML structures from a JavaScript object definition and append children elements.

```javascript
import makeHtml, { appendChildren } from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.1.1/src/make-html.js';

// Making an HTML Element
const definition = {
  name: 'div',
  attributes: { id: 'div-id' },
  classes: ['div-class'],
  styles: { backgroundColor: '#efefef' },
  children: [{ name: 'strong', children: ['Hello'] }]
};
const element = makeHtml(definition); // OUTPUT: <div id="div-id" class="div-class" style="background-color: #efefef;"><strong>Hello</strong></div>

const children = [' ', null, { name: 'span', children: ['World'] }];
appendChildren(element, children); // OUTPUT: <div id="div-id" class="div-class" style="background-color: #efefef;"><strong>Hello</strong> <span>World</span></div>

// Making a Document Fragment
const fragmentDefinition = { children: [{ name: 'strong', children: ['Hello'] }] };
const fragment = makeHtml(fragmentDefinition);

const fragmentChildren = [' ', { name: 'span', children: ['World'] }];
appendChildren(fragment, fragmentChildren);

// Making an SVG Element
const svgDefinition = {
  namespace: 'http://www.w3.org/2000/svg',
  name: 'svg',
  attributes: {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 16,
    height: 16,
    fill: 'currentColor',
    viewBox: '0 0 16 16'
  },
  classes: ['bi', 'bi-apple'],
  children: [{
    name: 'path',
    attributes: {
      d: 'M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282'
    }
  }]
};
const svg = makeHtml(svgDefinition);

const svgChildren = [{
  name: 'path',
  attributes: {
    d: 'M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282'
  }
}];
appendChildren(svg, svgChildren, 'http://www.w3.org/2000/svg');
```

## Set Attributes Module

Set multiple attributes on an HTML element, ignoring any attributes with `undefined` or `null` values.

```javascript
import setAttributes from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.1.1/src/set-attributes.js';

const element = document.createElement('div');
const attributes = { id: 'div-id', type: null, 'data-custom': '' };
setAttributes(element, attributes); // OUTPUT: <div id="div-id" data-custom></div>
```

## Set Styles Module

Apply multiple styles to an HTML element, ignoring any styles with `undefined` or `null` values.

```javascript
import setStyles from 'https://cdn.jsdelivr.net/gh/JamesRobertHugginsNgo/make-html@2.1.1/src/set-styles.js';

const element = document.createElement('div');
const styles = {
  backgroundColor: '#eeeeee',
  border: null,
  color: '#000000'
};
setStyles(element, styles); // OUTPUT: <div style="background-color: #eeeeee; color: #000000;"></div>
```
