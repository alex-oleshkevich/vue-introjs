import introJs from 'intro.js';

export default (Vue) => {
    Vue.prototype.$intro = (...args) => {
        return introJs(...args);
    };
    Vue.directive('intro', {
        bind(el, binding) {
            el.dataset.intro = binding.value;
        }
    });
    Vue.directive('intro-step', {
        bind(el, binding) {
            el.dataset.step = binding.value;
        }
    });
    Vue.directive('intro-position', {
        bind(el, binding) {
            el.dataset.position = binding.value;
        }
    });
    Vue.directive('intro-tooltip-class', {
        bind(el, binding) {
            el.dataset['tooltipclass'] = binding.value;
        }
    });
    Vue.directive('intro-highlight-class', {
        bind(el, binding) {
            el.dataset.highlightclass = binding.value;
        }
    });
    Vue.directive('intro-scroll-to', {
        bind(el, binding) {
            el.dataset.scrollto = binding.value;
        }
    });
    Vue.directive('intro-disable-interaction', {
        bind(el, binding) {
            el.dataset.disableInteraction = binding.value;
        }
    });
    Vue.directive('intro-hint', {
        bind(el, binding) {
            el.dataset.hint = binding.value;
        }
    });
    Vue.directive('intro-hint-position', {
        bind(el, binding) {
            el.dataset.hintposition = binding.value;
        }
    });
};
