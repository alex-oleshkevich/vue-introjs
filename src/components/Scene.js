import manager from '../manager';


export default {
    name: 'Scene',
    props: {

        /**
         * Scene name.
         */
        name: {type: String, default: 'default'},

        /**
         * When true, it will automatically start the tour.
         */
        autostart: Boolean,

        /**
         * Autostart only hints.
         */
        autostartHints: Boolean,

        /**
         * Autostart only tour.
         */
        autostartTour: Boolean,

        /**
         * Next button label.
         */
        nextLabel: String,

        /**
         * Previous button label.
         */
        prevLabel: String,

        /**
         * Skip button label.
         */
        skipLabel: String,

        /**
         * Done button label.
         */
        doneLabel: String,

        /**
         * Hide previous button in the first step?
         * Otherwise, it will be disabled button.
         */
        hidePrev: Boolean,

        /**
         * Hide next button in the last step?
         * Otherwise, it will be disabled button.
         */
        hideNext: Boolean,

        /**
         * Default tooltip position.
         */
        tooltipPosition: String,

        /**
         * Adding CSS class to all tooltips.
         */
        tooltipClass: String,

        /**
         * Additional CSS class for the helperLayer.
         */
        highlightClass: String,

        /**
         * Exit introduction when pressing Escape button, true or false.
         */
        exitOnEsc: {type: Boolean, default: true},

        /**
         * Exit introduction when clicking on overlay layer, true or false.
         */
        exitOnOverlayClick: {type: Boolean, default: true},

        /**
         * Show steps number in the red circle or not, true or false.
         */
        showStepNumbers: {type: Boolean, default: true},

        /**
         * Navigating with keyboard or not, true or false.
         */
        keyboardNavigation: {type: Boolean, default: true},

        /**
         * Show introduction navigation buttons or not, true or false.
         */
        showButtons: {type: Boolean, default: true},

        /**
         * Show introduction bullets or not, true or false.
         */
        showBullets: {type: Boolean, default: true},

        /**
         * Show introduction progress or not, true or false.
         */
        showProgress: Boolean,

        /**
         * Auto scroll to highlighted element if it’s outside of viewport, true or false.
         */
        scrollToElement: {type: Boolean, default: true},

        /**
         * Target element to scroll to (element or tooltip). Default is element. Applies when scrollToElement is true.
         */
        scrollTo: String,

        /**
         * Padding of scroll in px. Default is 30. Applies when scrollToElement is true.
         */
        scrollPadding: [String, Number],

        /**
         * Adjust the overlay opacity, Number between 0 and 1.
         */
        overlayOpacity: [String, Number],

        /**
         * To disable interactions with elements inside the highlighted box, true or false.
         */
        disableInteraction: Boolean,

        /**
         * Optionally define the position of hint.
         * Options: top-middle, top-left, top-right, bottom-left, bottom-right, bottom-middle,
         *  middle-left, middle-right, middle-middle.
         * Default: top-middle
         */
        hintPosition: String,

        /**
         * Hint button label.
         * Default: ‘Got it’
         */
        hintButtonLabel: String,

        /**
         * To add animation to hints or not.
         * Default: true
         */
        hintAnimation: {type: Boolean, default: true},
    },
    data() {
        return {
            steps: []
        };
    },
    provide() {
        return {
            introScene: this
        };
    },
    created() {
        manager.addScene(this.name, this.props);
    },
    mounted() {
        if (this.autostart) {
            this.start();
            this.showHints();
        } else {
            if (this.autostartTour) {
                this.start();
            }

            if (this.autostartHints) {
                this.showHints();
            }
        }
    },
    computed: {
        props() {
            const exclude = ['name', 'autostart'];
            const props = {};
            Object
                .entries(this.$props)
                .filter(([name, value]) => !exclude.includes(name) && value !== undefined)
                .forEach(([name, value]) => props[name] = value);

            // add listeners
            props.oncomplete = () => {
                alert(1);
            };
            return props;
        }
    },
    methods: {
        addStep(step) {
            manager.addStep(this.name, step);
        },
        addHint(hint) {
            manager.addHint(this.name, hint);
        },
        start() {
            this.bindListeners(
                manager.start(this.name)
            );
            this.$emit('autostart');
        },
        showHints() {
            this.bindListeners(
                manager.showHints(this.name)
            );
            this.$emit('autostart-hints');
        },
        bindListeners(instance) {
            instance.oncomplete((...args) => this.$emit('complete', ...args));
            instance.onbeforeexit((...args) => this.$emit('beforeexit', ...args));
            instance.onexit((...args) => this.$emit('exit', ...args));
            instance.onbeforechange((...args) => this.$emit('beforechange', ...args));
            instance.onchange((...args) => this.$emit('change', ...args));
            instance.onafterchange((...args) => this.$emit('afterchange', ...args));
            instance.onhintclick((...args) => this.$emit('hintclick', ...args));
            instance.onhintsadded((...args) => this.$emit('hintsadded', ...args));
            instance.onhintclose((...args) => this.$emit('hintclose', ...args));
        }
    },
    render(h) {
        return h('div', {}, this.$slots.default);
    }
};