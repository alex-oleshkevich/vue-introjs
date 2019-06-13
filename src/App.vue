<script>
import { IntroScene, IntroStep, IntroHint } from './components';
export default {
    name: 'app',
    components: {
        IntroScene,
        IntroStep,
        IntroHint,
    },
    data() {
        return {
            v: true,
        };
    },
    methods: {
        onEvent(event, ...args) {
            console.log(event, ...args);
        },
    },
};
</script>

<template>
    <div id="app">
        <intro-scene
            autostart-hints
            next-label="Next!"
            prev-label="Prev!"
            skip-label="Skip!"
            done-label="Done!"
            tooltip-position="top"
            tooltip-class="tlp"
            highlight-class="hlght"
            disable-interaction
            hide-prev
            @complete="onEvent('complete', $event)"
            @beforeexit="onEvent('beforeexit', $event)"
            @change="onEvent('change', $event)"
            @beforechange="onEvent('beforechange', $event)"
            @afterchange="onEvent('afterchange', $event)"
            @exit="onEvent('exit', $event)"
            @hintclick="onEvent('hintclick', $event)"
            @hintsadded="onEvent('hintsadded', $event)"
            @hintclose="onEvent('hintclose', $event)"
        >
            <div slot-scope="{startTour,showHints}">
                <div class="container">
                    <br>
                    <div>
                        <button class="btn btn-primary" @click="startTour">Start tour</button>
                        <button class="btn btn-primary" @click="v=!v">V</button>
                    </div>
                    <br>
                    <div>
                        <intro-step text="Step 1, default" v-if="v">
                            <h3>Intro step 1</h3>
                        </intro-step>
                        <div>Step 1, use of v-intro="'Message'".</div>
                        <hr>

                        <intro-step text="Step 2, custom position" position="top">
                            <h3>Intro step 2 (position "top")</h3>
                        </intro-step>
                        <div>
                            Step 2, use of v-intro-position="'top'".
                            <br>Renders tooltip on the top of this element.
                        </div>
                        <hr>

                        <intro-step text="Step 3, custom priority" step="2">
                            <h3>Intro step 3 (set priority)</h3>
                        </intro-step>
                        <div>
                            Step 3, use of v-intro-step="2".
                            <br>This step defines step priority = 2,
                            so intro for step #3 is rendered before step #2.
                        </div>
                        <hr>

                        <intro-step text="Step 4, tooltip class" tooltip-class="red-bg">
                            <h3>Intro step 4 (tooltip class)</h3>
                        </intro-step>
                        <div>
                            Step 4, use of v-intro-tooltip-class="'red-bg'".
                            <br>Custom CSS class for tooltip.
                        </div>
                        <hr>

                        <intro-step text="Step 5, highlight class" highlight-class="blue-bg">
                            <h3>Intro step 5 (highlight class)</h3>
                        </intro-step>
                        <div>
                            Step 5, use of v-highlight-tooltip-class="'blue-bg'".
                            <br>Custom CSS class for helper layer.
                        </div>
                        <hr>

                        <intro-step text="Step 6, scroll to" scroll-to="element">
                            <h3>Intro step 6 (change scrollTo attribute)</h3>
                        </intro-step>
                        <div>
                            Step 6, use of v-scroll-to="'element'".
                            <br>
                        </div>
                        <hr>

                        <intro-step text="Step 6, scroll to" disable-interaction>
                            <h3>Intro step 7 (change disable-interaction attribute)</h3>
                        </intro-step>
                        <div>
                            Step 7, use of v-disable-interaction="true".
                            <br>
                        </div>
                        <hr>

                        <intro-hint text="A hint">
                            <h3>A hint</h3>
                        </intro-hint>
                        <div>Renders a hint</div>
                        <hr>

                        <intro-hint text="A hint" position="top">
                            <h3>A hint (position = top)</h3>
                        </intro-hint>
                        <div>Renders a hint on top of elemenet.</div>
                        <hr>
                    </div>

                    <div>
                        <button class="btn btn-primary" @click="showHints">Show hints</button>
                    </div>
                </div>
            </div>
        </intro-scene>
    </div>
</template>
