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
         * Default tooltip position
         */
        tooltipPosition: String,

        /**
         * Adding CSS class to all tooltips
         */
        tooltipClass: String,

        /**
         * Additional CSS class for the helperLayer
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
         * Show introduction navigation buttons or not, true or false
         */
        showButtons: {type: Boolean, default: true},

        /**
         * Show introduction bullets or not, true or false
         */
        showBullets: {type: Boolean, default: true},

        /**
         * Show introduction progress or not, true or false
         */
        showProgress: Boolean,

        /**
         * Auto scroll to highlighted element if it’s outside of viewport, true or false
         */
        scrollToElement: {type: Boolean, default: true},

        /**
         * Target element to scroll to (element or tooltip). Default is element. Applies when scrollToElement is true
         */
        scrollTo: String,

        /**
         * Padding of scroll in px. Default is 30. Applies when scrollToElement is true
         */
        scrollPadding: [String, Number],

        /**
         * Adjust the overlay opacity, Number between 0 and 1
         */
        overlayOpacity: [String, Number],

        /**
         * To disable interactions with elements inside the highlighted box, true or false
         */
        disableInteraction: Boolean
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
        const exclude = ['name', 'autostart'];
        const props = {};
        Object
            .entries(this.$props)
            .filter(([name, value]) => !exclude.includes(name) && !!value)
            .forEach(([name, value]) => props[name] = value);
        manager.addScene(this.name, props);
    },
    mounted() {
        if (this.autostart) {
            manager.start(this.name);
        }
    },
    methods: {
        addStep(step) {
            manager.addStep(this.name, step);
        }
    },
    render(h) {
        return h('div', {}, this.$slots.default);
    }
};