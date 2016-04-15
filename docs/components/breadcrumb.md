# Breadcrumb (`seo-breadcrumb`)

## Syntax

```html
<!-- one seo breadcrumb for each fragment -->
<seo-breadcrumb
  name="Products"
  url="http://mywebsite.com/products"
></seo-breadcrumb>
```

## Props

- __name__: The name to display in the google result for this part of the breadcrumb
- __url__: The url of this part of the breadcrumb
- position: (optional) The position of this fragment in the breadcrumb hierarchy

## Why is this usefull

If you want your url to looks like this on Google:

![Breadcrumbs in action](https://developers.google.com/structured-data/images/breadcrumbs.png)

## Tip

If you are makin a single page application then you can define a `seo-breadcrumb` in every component. Every time the user (=search bot) switch to anoter page anoter component will change and the breadcrumb will be updated !

## Example

To have the same result as in the previous image you could do this

[Try this fiddle](http://jsfiddle.net/gh/get/library/pure/GuillaumeLeclerc/vue-seo/tree/master/examples/breadcrumb)

[include](../../examples/breadcrumb/demo.html)
[include](../../examples/breadcrumb/demo.js)

