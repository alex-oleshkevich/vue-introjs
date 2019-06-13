import introJs from 'intro.js';
import { filterProps } from './utils';

/**
 * Main intro.js scene.
 *
 * https://introjs.com/docs/intro/options/
 * https://introjs.com/docs/hints/options/
 */
export default {
    name: 'IntroScene',
    props: {
        autostart: Boolean,
        autostartHints: Boolean,

        nextLabel: String,
        prevLabel: String,
        skipLabel: String,
        doneLabel: String,
        hidePrev: Boolean,
        hideNext: Boolean,
        tooltipPosition: String,
        tooltipClass: String,
        highlightClass: String,
        exitOnEsc: { type: Boolean, default: true },
        exitOnOverlayClick: { type: Boolean, default: true },
        showStepNumbers: { type: Boolean, default: true },
        showButtons: { type: Boolean, default: true },
        showBullets: { type: Boolean, default: true },
        showProgress: { type: Boolean, default: true },
        disableInteraction: Boolean,
        scrollTo: String,
        scrollPadding: Number,
        overlayOpacity: Number,
    },
    data() {
        return {
            steps: [],
            hints: [],
        };
    },
    provide() {
        return {
            introScene: this,
        };
    },
    mounted() {
        this.bind();
        if (this.autostart) {
            this.startTour();
        }

        if (this.autostartHints) {
            this.showHints();
        }
    },
    methods: {
        startTour() {
            this.intro.start();
            this.$emit('start-tour');
        },

        showHints() {
            this.intro.showHints();
            this.$emit('start-hints');
        },

        hideHints() {
            this.intro.hideHints();
            this.$emit('hide-hints');
        },

        bind() {
            const blackList = ['autostart', 'autostartHints'];
            let props = filterProps(this.$props, blackList);
            // proxy all unknown attrs to introJs constructor as well
            let attrs = filterProps(this.$attrs);

            this.intro = introJs(this.$el);
            this.intro.setOptions({
                hints: this.hints,
                steps: this.steps,
                ...props,
                ...attrs,
            });

            Object.entries(this.$listeners).forEach(([event, listener]) => {
                if (!event.startsWith('on')) {
                    event = `on${event}`;
                }
                this.intro[event](listener);
            });
        },

        call(method, ...args) {
            this.intro[method](...args);
        },

        addStep(step) {
            this.steps.push(step);
        },

        removeStep(id) {
            this.steps = this.steps.filter(s => s._id !== id);
            this.intro.setOption('steps', this.steps);
        },

        addHint(hint) {
            this.hints.push(hint);
        },

        removeHint(id) {
            this.hints = this.hints.filter(s => s._id !== id);
            this.intro.setOption('hints', this.hints);
        },
    },
    render() {
        return this.$scopedSlots.default({
            startTour: this.startTour,
            showHints: this.showHints,
            hideHints: this.hideHints,
            nextStep: this.call.bind(this, 'nextStep'),
            previousStep: this.call.bind(this, 'previousStep'),
            exit: this.call.bind(this, 'exit'),
            refresh: this.call.bind(this, 'refresh'),
            goToStep: this.call.bind(this, 'goToStep'),
        });
    },
};
