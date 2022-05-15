# css-unicode-loader

webpack loader for convert chinese or double-byte character string of scss/sass/less/css files to unicode encoding.

## Usage

```
npm install --save-dev css-unicode-loader
```

if use vue-cli 4+  and  scss(sass),  add the loader in the vue config file .

```js
// vue.config.js
module.exports = {
  configureWebpack: config => {
    const sassLoader = require.resolve('sass-loader');
    config.module.rules.filter(rule => {
      return rule.test.toString().indexOf("scss") !== -1;
    })
      .forEach(rule => {
        rule.oneOf.forEach(oneOfRule => {
          const sassLoaderIndex = oneOfRule.use.findIndex(item => item.loader === sassLoader);
          oneOfRule.use.splice(sassLoaderIndex, 0,
          	{ loader: require.resolve("css-unicode-loader") });
        });
      });
    }
}
```

if use webpack.config.js,  add the loader in the config file .

```js
// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // Creates `style` nodes from JS strings
      }, {
          loader: "css-loader" // Translates CSS into CommonJS
      }, {
          loader: "css-unicode-loader" // Convert double-byte character to unicode encoding.
      }, {
          loader: "sass-loader" // Compiles Sass to CSS
      }]
    }]
  }
};
```

## Note

This loader must be before sass-loader if you used sass-loader

## Example

```css
.scss::after {
  content: "中国";
}
.icon-content::after {
  content: "";
}
```

after loader handle

```css
.scss::after {
  content: "\4e2d\56fd";
}
.icon-content::after {
  content: "\e6df";
}
```
