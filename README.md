# css-unicode-loader

webpack loader for convert chinese string to unicode char in the scss/sass/less/css file

## Usage

if vue-cli 3+,  add the loader in the vue config file .

```js
// vue.config.js
module.exports = {
  configureWebpack: config => {
    config.module.rules.filter(rule => {
      return rule.test.toString().indexOf("scss") !== -1;
    })
      .forEach(rule => {
        rule.oneOf.forEach(oneOfRule => {
          oneOfRule.use.splice(oneOfRule.use.indexOf(require.resolve('sass-loader')), 0,
          	{ loader: require.resolve("css-unicode-loader")})
        })
      })
    }
}
```

## Note

This loader must be before sass-loader if you used sass-loader and dart-sass

## Example

```css
.scss::after {
  content: "中国";
}
```

after loader handle

```css
.scss::after {
  content: "\4e2d\56fd";
}
```

