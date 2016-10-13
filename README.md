# rollup-test
I'm not sure if I've got something wrong here

```bash
# node_modules committed as example
npm install rollup d3 rollup-plugin-node-resolve

./node_modules/.bin/rollup -c
```

I'd expect:

```js
var version = "4.2.7";

console.log("d3 version: " + version)
```

What I get:

```js
var version = "4.2.7";

//… 12000 lines of d3

console.log("d3 version: " + version)
```
