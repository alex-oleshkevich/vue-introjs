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
        step: {type: [String, Number]},

        /**
         * Optionally define a CSS class for tooltip.
         */
        tooltipClass: {type: String},

        /**
         *  Optionally append a CSS class to the helperLayer.
         */
        highlightClass: {type: String},

        /**
         * Optionally define the position of tooltip:
         * top, left, right, bottom, bottom-left-aligned (same as bottom), bottom-middle-aligned,
         * bottom-right-aligned or auto (to detect the position of element and assign the correct position automatically).
         * Default is bottom.
         */
        position: {type: String, default: 'bottom'},

        /**
         * Optionally define the element to scroll to, element or tooltip.
         * Default is element.
         */
        scrollTo: {type: String, default: 'element'},

        /**
         * To disable interactions with elements inside the highlighted box, true or false (also 1 or 0).
         */
        disableInteraction: {type: [Boolean, Number]}
    },
    mounted() {
        this.introScene.addStep({
            element: this.$el,
            intro: this.text,
            step: this.step,
            tooltipClass: this.tooltipClass,
            highlightClass: this.highlightClass,
            position: this.position,
            scrollTo: this.scrollTo,
            disableInteraction: this.disableInteraction
        });
    },
    render(h) {
        return h('div', {
            attrs: {
                'data-step': this.step
            }
        }, this.$slots.default);
    }
};