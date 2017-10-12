# vue-introjs
intro.js bindings for Vue.

## Installation
### Add package
```bash
yarn add vue-introjs

# or via npm:
npm i vue-introjs
```

### Install plugin
```javascript
import VueIntro from 'vue-introjs';
Vue.use(VueIntro);
```

#### Use CDN version of introJs
Make sure you have installed and attached [`intro.js`](http://introjs.com/docs/getting-started/install) scripts and styles to the page.
This plugin **does not** come with intro.js built-in.

The motivation of it is to give the developer more control on intro.js versions.

#### Use with webpack
Install required dependency:
```bash
yarn add intro.js
```

As this plugin relies on global `introJs` variable, webpack's should provide it:
```javascript
// webpack.config.js
{
    plugins: [
        new webpack.ProvidePlugin({
            // other modules
            introJs: ['intro.js', 'introJs']
        })
    ]
}

// attach CSS
// SomeComponent.vue
import 'intro.js/introjs.css';
```

## Contents
The plugin extends Vue with a set of directives and `$intro()` constructor function.


## Define steps and hints
Directives, to define introductional steps:
### Steps

```html
The tooltip text of step.
<div v-intro="'The content of tooltip'"></div>
```

```html
Optionally define the number (priority) of step.
<div v-intro="'The content of tooltip'" v-intro-step="2"></div>
```

```html
Optionally define a CSS class for tooltip.
<div v-intro="'The content of tooltip'" v-intro-tooltip-class="'red-bg'"></div>
```

```html
Optionally append a CSS class to the helperLayer.
<div v-intro="'The content of tooltip'" v-intro-highlight-class="'blue-bg'"></div>
```

```html
Optionally define the position of tooltip, `top`, `left`, `right`, `bottom`, `bottom-left-aligned` (same as `bottom`), `bottom-middle-aligned`, `bottom-right-aligned` or `auto` (to detect the position of element and assign the correct position automatically). Default is `bottom`.
<div v-intro="'The content of tooltip'" v-intro-position="'top'"></div>
```

```html
Optionally define the element to scroll to, `element` or `tooltip`. Default is `element`.
<div v-intro="'The content of tooltip'" v-intro-scroll-to="'element'"></div>
```

```html
To disable interactions with elements inside the highlighted box, `true` or `false` (also `1` or `0`).
<div v-intro="'The content of tooltip'" v-intro-disable-interaction="false"></div>
```

More about [intro steps](http://introjs.com/docs/intro/attributes/)

### Hints
Directives, to define hints:

```html
The tooltip text of hint.
<div v-hint="'The content of tooltip'"></div>
```

```html
Optionally define the position of hint. Options: `top-middle`, `top-left`, `top-right`, `bottom-left`, `bottom-right`, `bottom-middle`, `middle-left`, `middle-right`, `middle-middle`. Default: `top-middle`.
<div v-hint="'The content of tooltip'" v-intro-hint-position="'top'"></div>
```

More about [hints](http://introjs.com/docs/hints/attributes/)

Also refer `example` directory for live examples.

## Usage
Once all steps are defined, call `start()` or `showHints()` to start the show:
```javascript
// SomeComponent.vue
{
    mounted() {
        this.$intro().start(); // start the guide
        this.$intro().showHints(); // show hints
    }
}
```

## Configuration
When the defaults are not enough, then fine tuning is required.
Construct a new `introJs` instance and configure in own way:
```javascript
this.$intro('#intro-farm'); // //start introduction for element id='intro-farm'
this.$intro().addStep({}); // Add a new step to introJs programmatically.
```

Basically, `$intro()` returns a new `introJs` instance which then can be configured usign it's [API](http://introjs.com/docs/intro/api).

## Credits
1. [http://introjs.com](http://introjs.com)
2. Gabriel J Perez Irizarry
