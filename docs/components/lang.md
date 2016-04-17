# Lang (`seo-lang`)

This components is here to warn search engines your page is available in other languages

## Syntax

```html
<seo-lang code="en" url="myenurl.com" current></seo-lang>
```

## Props

- __code__ : The code for this language
- __url__ : The url of the equivalent page
- __current__: Tells if this is the current displayed language

## Impact

- __Google__:
  - Add Hreflang tags, You can read [this](https://en.wikipedia.org/wiki/Hreflang)
- __OpenGraph / Facebook Search__:
  - Add locale to your open graph
  - Add alternative locales

## Example

[Try this fiddle](http://jsfiddle.net/gh/get/library/pure/GuillaumeLeclerc/vue-seo/tree/master/examples/hreflang)

[include](../../examples/hreflang/demo.html)
[include](../../examples/hreflang/demo.js)

