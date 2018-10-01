/**
 * An intro.js step.
 */
export default {
    name: 'Step',
    inject: ['introScene'],
    props: {
        /**
         * The tooltip text of step.
         */
        text: {type: String, required: true},

        /**
         * Optionally define the number (priority) of step.
         */
        step: [String, Number],

        /**
         * Optionally define a CSS class for tooltip.
         */
        tooltipClass: String,

        /**
         *  Optionally append a CSS class to the helperLayer.
         */
        highlightClass: String,

        /**
         * Optionally define the position of tooltip:
         * top, left, right, bottom, bottom-left-aligned (same as bottom), bottom-middle-aligned,
         * bottom-right-aligned or auto (to detect the position of element and assign the correct position automatically).
         * Default is bottom.
         */
        position: String,

        /**
         * Optionally define the element to scroll to, element or tooltip.
         * Default is element.
         */
        scrollTo: String,

        /**
         * To disable interactions with elements inside the highlighted box, true or false (also 1 or 0).
         */
        disableInteraction: [Boolean, Number]
    },
    mounted() {
        const props = {
            element: this.$el,
            intro: this.text,
            step: this.step,
            tooltipClass: this.tooltipClass,
            highlightClass: this.highlightClass,
            // bug in intro.js: it ignores global position and always uses one from the step
            position: this.position || this.introScene.tooltipPosition,
            scrollTo: this.scrollTo,
            disableInteraction: this.disableInteraction
        };
        const step = {};
        Object
            .entries(props)
            /* eslint-disable-next-line no-unused-vars */
            .filter(([key, value]) => !!value)
            .forEach(([key, value]) => step[key] = value);

        this.introScene.addStep(step);
    },
    render(h) {
        return h('div', {}, this.$slots.default);
    }
};