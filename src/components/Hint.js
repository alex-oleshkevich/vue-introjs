/**
 * An intro.js step.
 */
export default {
    name: 'Hint',
    inject: ['introScene'],
    props: {
        /**
         * The tooltip text of hint.
         */
        text: {type: String, required: true},

        /**
         * Optionally define the position of hint.
         * Options: top-middle, top-left, top-right, bottom-left, bottom-right, bottom-middle,
         *  middle-left, middle-right, middle-middle.
         * Default: top-middle
         */
        position: String,

        /**
         * To add animation to hints or not.
         * Default: true
         */
        animation: Boolean,
    },
    mounted() {
        const props = {
            element: this.$el,
            hint: this.text,
            hintPosition: this.position || this.introScene.tooltipPosition,
            // bug in intro.js: uses boolean check and sets a default value
            // https://github.com/usablica/intro.js/blob/master/intro.js#L1833
            // https://github.com/usablica/intro.js/issues/895
            hintAnimation: this.animation,
        };
        const item = {};
        Object
            .entries(props)
            /* eslint-disable-next-line no-unused-vars */
            .filter(([key, value]) => value !== undefined)
            .forEach(([key, value]) => item[key] = value);

        this.introScene.addHint(item);
    },
    render(h) {
        return h('div', {}, this.$slots.default);
    }
};