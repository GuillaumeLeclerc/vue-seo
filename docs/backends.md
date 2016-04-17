# Backends

The `seo-*` components enable features on different backends. The following backends are currently supported: 

- __Google__: The components help google understading your data and display it in an enhanced way to your users
- __OpenGraph__: The components helps sharing plateform to understand your data and display them in a good way the following website support this:
  - Facebook sharing
  - Linkedin sharing
  - Google +
  - mixi
  - Know others? make a pull request :)

__IMPORTANT__: As of today, Facebook bots does noes render javascript (does not run Vue code). If you want it to be effective you will need to use a prerenderer such as:
  - [Prerender-node](https://github.com/prerender/prerender-node)
  - [Prerender.io](https://prerender.io)

Or if you feel risky you can try [`vue-server`](https://github.com/ngsru/vue-server)

## Disabling Backends

If you want to disable a backend you can add the following in the options of VueSEO:

- __Google__: `google: false`
- __OpenGraph__: `openGraph: false`

## Adding Backend

It's not possible at the moment to add custom backends. If you want this feature (or another) you can make an Issue on the repository.
