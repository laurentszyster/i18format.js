i18format.js
===
[![Build Status](https://travis-ci.org/laurentszyster/i18format.js.svg)](https://travis-ci.org/laurentszyster/i18format.js)

Internationalisation for texts and format strings.

Synopsis
---
Pick an alias for `window.i18format` that suites you:

```javascript
var i18 = window.i18format;
```

Set a named language as a map of text and format strings :

```javascript
i18.setLanguage("FR", {
	"Hello {}!": "Salut {}!",
	"World": "Monde"
	});
```

Now

```javascript
i18("Hello {}!", i18("World"));
```

Yields

```javascript
Salut Monde!
```

You can index arguments

```javascript
i18("Hello {0}!", i18("World"));
```

Or name a property of `this`

```javascript
this.world = i18("World");
i18("Hello {world}!");
```

Applications can set their own formats :

```javascript
i18.setFormat(':h', function (value) {
	return value.toString()
		.replace('&', '&amp;')
		.replace('<', '&lt;')
		.replace('>', '&gt;');	
});
i18("<h1>Hello {:h}!</h1>", "World");
```

After a comprehensive run to all invocations of `window.i18format` the list of formats and strings to translate can be retrieved.

```javascript
i18.getKeys();
```

That's all.