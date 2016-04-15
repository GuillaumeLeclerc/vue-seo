# Policies

## Motivation

What it you define something twice on your page (you could define it in the main component and the other one in a component displayed only if a certain route is matched). For example: 

```html
<seo-title value="A"></seo-title>
<seo-title value="B"></seo-title>
```

What should be the title (ie. displayed on top of the user browser) ?

Policies are the way to determine the behavior in this kind of situation.

You can define a property for almost everything defined with `vue-seo` in the option object: 

```javascript
Vue.use(VueSEO, {
  policies: {
    'title': the_policy
  }
});
```

__Important__: The default policiy if not specified is `VueSEO.policies.last`

You can either use:
- One of the [predefined policies](predefinedPolicies.md)
- [Make your own policy](customPolicies.md)
