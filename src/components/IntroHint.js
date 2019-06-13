import { filterProps } from './utils';

export default {
    name: 'IntroHint',
    props: {
        text: String,
        position: String,
        animation: { type: Boolean, default: true },
    },
    inject: ['introScene'],
    mounted() {
        this.addSelf();
    },
    beforeDestroy() {
        this.removeSelf();
    },
    methods: {
        addSelf() {
            let props = filterProps({
                hintPosition: this.hintPosition,
                hintAnimation: this.hintAnimation,
            });

            this.introScene.addHint({
                _id: this._uid,
                hint: this.text,
                element: this.$el,
                hintPosition: this.position,
                hintAnimation: this.animation,
                ...props,
            });
        },
        removeSelf() {
            this.introScene.removeHint(this._uid);
        },
    },
    render() {
        return this.$scopedSlots.default({});
    },
};
