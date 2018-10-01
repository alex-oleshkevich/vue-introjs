# vue-introjs
intro.js bindings for Vue.

## Installation
### Add package
```bash
yarn add vue-introjs intro.js

# or via npm:
npm i vue-introjs intro.js
```

### Install plugin
```javascript
import VueIntro from 'vue-introjs';

// attach CSS
import 'intro.js/introjs.css';

Vue.use(VueIntro);
```

#### Use CDN version of introJs
Make sure you have installed and attached [`intro.js`](http://introjs.com/docs/getting-started/install) scripts and styles to the page.
This plugin **does not** come with intro.js built-in.

The motivation of it is to give the developer more control on intro.js version.

## Contents
The plugin extends Vue with a set of components and `$tour` global object.

## The principle
As a developer you have to define a `intro-scene`. A scene may have one or more step and hints definitions.

```html
<intro-scene>
    <intro-step text="Step 1">
        <div>This is a block with a comment.</div>
    </intro-step>
    <intro-step text="Step 2">
        <div>This is a block 2 with a comment.</div>
    </intro-step>
</intro-scene>
```

## IntroScene component
`<intro-scene>` components implements all options of `intro.js` as properties. 
This component must be a parent component of other `intro-` components.   
For more information refer this docs: [https://introjs.com](https://introjs.com/docs/intro/options/).


Available component properties:

| Property              | Type           | Comment                                                                                                         |
|-----------------------|----------------|-----------------------------------------------------------------------------------------------------------------|
| name                  | string         | A scene name.                                                                                                   |
| autostart             | boolean        | Whether to automatically start the tour.                                                                        |
| autostart-hints       | boolean        | Whether to autostart ONLY hits (ignores `autostart` option).                                                    |
| autostart-tour        | boolean        | Whether to autostart ONLY the tour (ignores `autostart` option).                                                |
| next-label            | string         | Next button label.                                                                                              |
| prev-label            | string         | Previous button label.                                                                                          |
| skip-label            | string         | Skip button label.                                                                                              |
| done-label            | string         | Done button label.                                                                                              |
| hide-prev             | boolean        | Hide previous button in the first step? Otherwise, it will be disabled button.                                  |
| hide-next             | boolean        | Hide next button in the last step? Otherwise, it will be disabled button.                                       |
| tooltip-position      | string         | Default tooltip position.                                                                                       |
| tooltip-class         | string         | Adding CSS class to all tooltips.                                                                               |
| highlight-class       | string         | Additional CSS class for the helperLayer.                                                                       |
| exit-on-esc           | boolean        | Exit introduction when pressing Escape button, true or false. Default: true                                     |
| exit-on-overlay-click | boolean        | Exit introduction when clicking on overlay layer, true or false. Default: true                                  |
| show-step-numbers     | boolean        | Show steps number in the red circle or not, true or false. Default: true                                        |
| keyboard-navigation   | boolean        | Navigating with keyboard or not, true or false. Default: true                                                   |
| show-buttons          | boolean        | Show introduction navigation buttons or not, true or false. Default: true                                       |
| show-bullets          | boolean        | Show introduction bullets or not, true or false. Default: true                                                  |
| show-progress         | boolean        | Show introduction progress or not, true or false. Default: false                                                |
| scroll-to-element     | boolean        | Auto scroll to highlighted element if it’s outside of viewport, true or false. Default: true                    |
| scroll-to             | string         | Target element to scroll to (element or tooltip). Default is element. Applies when `scroll-to-element` is true. |
| scroll-padding        | string, number | Padding of scroll in px. Default is 30. Applies when `scroll-to-element` is true.                               |
| overlay-opacity       | string, number | Adjust the overlay opacity, Number between 0 and 1.                                                             |
| disable-interaction   | boolean        | To disable interactions with elements inside the highlighted box, true or false.                                |
| hint-position         | string         | Optionally define the position of hint.                                                                         |
| hint-button-label     | string         | Hint button label.                                                                                              |
| hint-animation        | boolean        | To add animation to hints or not.                                                                               |
 
## IntroStep component
This components defines a step.  Some component properties allows to override a default value from `intro-scene`:
```html
<intro-scene tooltip-class="red">
    <intro-step>red</intro-step> 
    <intro-step tooltip-class="green">green</intro-step> 
</intro-scene>
``` 
More about [intro steps](http://introjs.com/docs/intro/attributes/)

Properties:

| Property            | Type           | Comment
|---------------------|----------------|------------------------------------------------------------------------------------------------|            
| text                | string         | The tooltip text of step.                                                                      |
| step                | string, number | Optionally define the number (priority) of step.                                               |
| tooltip-class       | string         | Optionally define a CSS class for tooltip.                                                     |
| highlight-class     | string         | Optionally append a CSS class to the helperLayer.                                              |
| position            | string         | Optionally define the position of tooltip.                                                     |
| scroll-to           | string         | Optionally define the element to scroll to, element or tooltip.                                |
| disable-interaction | boolean        | To disable interactions with elements inside the highlighted box, true or false (also 1 or 0). |
 
## IntroHint component
This components defines a hint.  Some component properties allows to override a default value from `intro-scene`.
```html
<intro-scene hint-position="top">
    <intro-hint position="bottom">bottom</intro-step> 
    <intro-hint>top</intro-step> 
</intro-scene>
``` 

More about [hints](http://introjs.com/docs/hints/attributes/)

Properties:

| Property          | Type          | Comment                                 |
|-------------------|---------------|-----------------------------------------|
| text              | string        | The tooltip text of hint.               |
| position          | string        | Optionally define the position of hint. |
| animation         | boolean       | To add animation to hints or not.       |
 
Also refer `example` directory for live examples.

## Events
`<intro-scene>` component emits the following events: 
`complete`, `beforeexit`, `exit`, `beforechange`, `change`, `afterchange`, `hintclick`,
`hintsadded`, `hintclose`.

[https://introjs.com/docs/intro/api/](https://introjs.com/docs/intro/api/)

## Autostart
Then `intro-scene` has `autostart` attribute it will automatically start tour and hints on load.  
You cat also start only what you need. Instead of setting `autostart`, just use one of these 
properties: `autostart-tour`, `autostart-hints`. 
Any of them will ignore `autostart` property if it present.

## Manual start
```js
export default {
    mounted() {
        this.$tour.start(); // start tour
        this.$tour.showHints(); // show hints
    }
}
``` 

## Multiple scenes
Sometimes you want to have two or more different scenes (tours). 
It is possible with `vue-introjs`. Just create as many `intro-scene` as you need 
and give them unique names:
```html
<intro-scene name="scene-a"></intro-scene>
<intro-scene name="scene-b"></intro-scene>
<intro-scene name="scene-c"></intro-scene>
```

Then, in component start the scene you want:
```js
export default {
    mounted() {
        this.$tour.start('scene-a'); // start scene a
        this.$tour.start('scene-c'); // start scene c
        this.$tour.showHints('scene-b'); // show hints from scene b
    }
}
``` 

## Credits
1. [http://introjs.com](http://introjs.com)
2. Gabriel J Perez Irizarry