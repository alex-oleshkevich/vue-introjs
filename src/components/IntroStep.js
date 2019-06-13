import { filterProps } from './utils';

export default {
    name: 'Step',
    inject: ['introScene'],
    props: {
        text: { type: String, required: true },
        step: [String, Number],
        tooltipClass: String,
        highlightClass: String,
        position: String,
        scrollTo: String,
        disableInteraction: [Boolean, Number],
    },
    mounted() {
        this.addSelf();
    },
    beforeDestroy() {
        this.removeSelf();
    },
    methods: {
        addSelf() {
            let props = filterProps(this.$props, ['text']);
            this.introScene.addStep({
                _id: this._uid,
                intro: this.text,
                element: this.$el,
                ...props,
            });
        },
        removeSelf() {
            this.introScene.removeStep(this._uid);
        },
    },
    render() {
        return this.$scopedSlots.default({});
    },
};
