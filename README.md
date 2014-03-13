i18format.js
===
Internationalisation for texts and format strings.

This is not a templating library, but if your JavaScript application demands internationalization and can use simple format strings for most of its text output, then `i18format.js` provides just that.

Synopsis
---
Pick an alias for `window.i18format` that suites you:

```
var i18 = window.i18format;
```

Set a named language as a map of text and format strings :

```
i18.setLanguage("FR", {
	"Hello {}!": "Salut {}!",
	"World": "Monde"
	});
```

Now

```
i18("Hello {}!", i18("World"));
```

Yields

```	
Salut Monde!
```

You can index arguments

```	
i18("Hello {0}!", i18("World"));
```

Or name a property of `this`

```	
this.world = i18("World");
i18("Hello {world}!");
```

Applications can set their own formats :

```	
i18.setFormat(':h', function (value) {
	return value.toString()
		.replace('&', '&amp;')
		.replace('<', '&lt;')
		.replace('>', '&gt;');	
});
i18("<h1>Hello {:h}!</h1>", "World");
```

After a comprehensive run to all invocations of `window.i18format` the list of formats and strings to translate can be retrieved.

```	
i18.getKeys();
```

That's all.