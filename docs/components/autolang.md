# AutoLang (`seo-auto-lang`)

## Syntax

```html
<seo-auto-lang
  :langs="['fr', 'en', 'de']"
  mode="domain"
  default="en"
></seo-auto-lang>
```

## Props

- __langs__: The langs the website is available in
- __mode__: How you encode the lang in the url, supported formats:
  - `domain`: The lang is an is an ISO-639-1 lang code put as a subdomain. Eg: 'fr.papayapods.com'.
- __default__: This is the default language. It will be ommited in the urls generateds

## Impact

This component will generate automatically `<seo-lang>` components based on the current url in all the langs you defined. And automatically updates when the url change.


## Example

[Try this fiddle](http://jsfiddle.net/gh/get/library/pure/GuillaumeLeclerc/vue-seo/tree/master/examples/autoLang)

[include](../../examples/autoLang/demo.html)
[include](../../examples/autoLang/demo.js)
