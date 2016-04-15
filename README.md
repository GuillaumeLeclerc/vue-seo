# `vue-seo`

## [Full Documentation] (http://guillaumeleclerc.github.io/vue-seo/)

## Aim

The aim of this Vue plugin is to help you indexing your Vue powered website using all the greatness of Vue. We also want to give shorthands for common tasks that are usually verbose and reduce the readability of your code.


# Showcase

With this plugin you are able to use this kind of syntax in any component (does not need to be in the head):

### Complex title management

```html
<seo-title
  v-if="condition"
  v-bind:value="myVariable"
></seo-title>
```


### Describe your company
```html
<seo-organization
  url="company.com"
  logo="http://awsome.image/my.png"
  name="Awsome company name"
></seo-organization>
```

### Merge policies
```
  <seo-title value="My website"></seo-title>
  <seo-title v-if="notifications > 0" value="{{notifications}} notif."></seo-title>
```

with a merge policy for title `VueSEO.policies.join(' - ')` and notifications equal to 3. The title will be: 

`My website - 3 notif.`

__note__: you can define the two `seo-title` components at different places wherever you want.

If you want to know more about all the other features just browser the documentation.

## Sponsor

The development of this plugin is made possible by [Papayapods](http://papayapods.com)


