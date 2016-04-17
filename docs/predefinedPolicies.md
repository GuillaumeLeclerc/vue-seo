#Predefined Policies

The 5 predefined policies are:

- `VueSEO.policies.last`: With this policy only the last defined value will be considered
- `VueSEO.policies.first`: Only the first defined value will be considered
- `VueSEO.policies.join(glue, reversed=false)`: All values will be considered and joined with `glue` (potenetially reversed)
- `VueSEO.policies.repeat`: The displayer will be repeated for every component you make (eg. there will be 4 title tag if you have 4 seo-title)
- `VueSEO.policies.identity`: The policy does not do anything. That means you need a special backend. It will have to accept an array instead of an object (you should not need it, it should be for internals only)

## Example

[include](../examples/joinedTitle/demo.js)
