# vue-introjs

intro.js bindings for Vue.

## Installation.

### Add package.

```bash
yarn add vue-introjs
```

### Install plugin.

```javascript
import Vue from 'vue';
import VueIntro from 'vue-introjs';

import 'intro.js/introjs.css';

Vue.use(VueIntro);
```

## Usage.

First, define a scene. The scene is a common parent for all your hints and steps.  
Then, within the scene, define steps and hints by using `intro-step` and `intro-hint` components.

```html
<div>
    <intro-scene>
        <div>
            <intro-step text="Step 1 text">
                <h1>Step 1.</h1>
            </intro-step>
            <intro-step text="Step 2 text">
                <h1>Step 2.</h1>
            </intro-step>
            <intro-hint text="Hint 1 text">
                <h1>A hint.</h1>
            </intro-hint>
        </div>
    </intro-scene>
</div>
```

### Tour autostart.

Use `autostart` and `autostart-hints` properties to automatically start a tour or show hints.
The tour will be started only when all steps and hints are mounted.

```html
<div>
    <intro-scene autostart autostart-hints>
        <div>
            <intro-step text="Step 1 text">
                <h1>Step 1.</h1>
            </intro-step>
            <intro-hint text="Hint 1 text">
                <h1>A hint.</h1>
            </intro-hint>
        </div>
    </intro-scene>
</div>
```

### Manually start tour and hints.

The scene exposes several control methods via [scoped slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots-with-the-slot-scope-Attribute).
Using them you can manually control the scene.

```html
<div>
    <intro-scene>
        <div slot-scope="{startTour, showHints}">
            <intro-step text="Step 1 text">
                <h1>Step 1.</h1>
            </intro-step>
            <intro-step text="Step 2 text">
                <h1>Step 2.</h1>
            </intro-step>
            <intro-hint text="Hint 1 text">
                <h1>A hint.</h1>
            </intro-hint>

            <div>
                <button @click="startTour">Start tour</button>
                <button @click="showHints">Show hints</button>
            </div>
        </div>
    </intro-scene>
</div>
```

## Configuration

### IntroScene

A scene accepts all options [supported by introJs](https://introjs.com/docs/intro/options/).
See also [component props](https://github.com/alex-oleshkevich/vue-introjs/blob/master/src/components/IntroScene.js).

```html
<intro-scene
     next-label="Next"
     prev-label="Prev"
     tooltip-class="tooltip"
    :exit-on-esc="false"
>
</intro-scene>
```

**Note**, that `introJs` sets `true` to many boolean properties by default.
In order to disable them (eg. `exit-on-esc`) bind them to component:

```html
<intro-scene exit-on-esc :exit-on-esc="true" :exit-on-esc="false" />
```

`exit-on-esc` and `:exit-on-esc="true"` are equal.

**Note 2**, following Vue code standards properties have to be written in css-case.  
So instead of `showStepNumbers` you should use `show-step-numbers`.

### IntroStep and IntroHint components

These components define a tour step and a hint.
See their props in the example below.

```html
<intro-scene>
    <intro-step
        disable-interaction
        text="Step text"
        step="2"
        tooltip-class="tooltip-cls"
        highlight-class="highlight-cls"
        position="top"
        scroll-to="element"
    />

    <intro-hint animation text="Hint text" position="top" />
</intro-scene>
```

Refer official documentation for property description:  
[https://introjs.com/docs/hints/options/](https://introjs.com/docs/hints/options/)  
[https://introjs.com/docs/hints/attributes/](https://introjs.com/docs/hints/attributes/)

## Credits

1. [http://introjs.com](http://introjs.com)
2. Gabriel J Perez Irizarry
