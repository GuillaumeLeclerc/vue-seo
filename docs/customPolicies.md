# Custom policy

In order to write your own policy you need to define a function taking one argument: an array of all definitions for a given attribute and return a string

## Example

```javascript

const myStupidPolicy = (possible) => {
  return "constant value";
}

Vue.use(VueSEO, {
  policies: {
    'title': myStupidPolicy
  }
}
```
