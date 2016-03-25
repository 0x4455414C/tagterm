## tagTerm
Encapsulates a term within a string with html tags of your choosing.
## Install

```bash
$ npm install tagterm
```
## Usage
	tagterm(input, term, tag)
**In JS**
```js
var tagterm = require('tagterm');
input = "hello world, how are you?";
input = tagterm(input, "world", "em");

```
**Output**
```html
hello <em>world</em>, how are you?
```

**As HTML**

  hello *world*, how are you?