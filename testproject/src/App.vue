<template>
  <div id="app">
        <div>
            <h3 v-intro="'Step 1, default'">Intro step 1</h3>
            <div>
                Step 1, use of v-intro="'Message'".
            </div>
            <hr />

            <h3 v-intro="'Step 2, custom position'" v-intro-position="'top'">Intro step 2 (position "top")</h3>
            <div>
                Step 2, use of v-intro-position="'top'". <br />
                Renders tooltip on the top of this element.
            </div>
            <hr />

            <h3 v-intro="'Step 3, custom priority'" v-intro-step="2">Intro step 3 (set priority)</h3>
            <div>
                Step 3, use of v-intro-step="2". <br />
                This step defines step priority = 2,
                so intro for step #3 is rendered before step #2.
            </div>
            <hr />

            <h3 v-intro="'Step 4, tooltip class'" v-intro-tooltip-class="'red-bg'">Intro step 4 (tooltip class)</h3>
            <div>
                Step 4, use of v-intro-tooltip-class="'red-bg'". <br />
                Custom CSS class for tooltip.
            </div>
            <hr />

            <h3 v-intro="'Step 5, highlight class'" v-intro-highlight-class="'blue-bg'">Intro step 5 (highlight class)</h3>
            <div>
                Step 5, use of v-highlight-tooltip-class="'blue-bg'". <br />
                Custom CSS class for helper layer.
            </div>
            <hr />

            <h3 v-intro="'Step 6, scroll to'" v-intro-scroll-to="'element'">Intro step 6 (change scrollTo attribute)</h3>
            <div>
                Step 6, use of v-scroll-to="'element'". <br />
            </div>
            <hr />

            <h3 v-intro="'Step 7, disable-interaction'" v-intro-disable-interaction="true">Intro step 7 (change disable-interaction attribute)</h3>
            <div>
                Step 7, use of v-disable-interaction="true". <br />
            </div>
            <hr />

            <h3 v-intro-hint="'The hint'">A hint</h3>
            <div>
                Renders a hint
            </div>
            <hr />

            <h3 v-intro-hint="'The hint'" v-intro-hint-position="'top'">A hint (position = top)</h3>
            <div>
                Renders a hint on top of elemenet.
            </div>
            <hr />
        </div>
  </div>
</template>

<script>
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import VueIntro from 'vue-introjs';

Vue.use(VueIntro);

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted() {
    this.$intro().start();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
