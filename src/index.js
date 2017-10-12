/* global introJs */
import { DIRECTIVES } from './directives';

const Plugin = {
    install(Vue) {
        Vue.prototype.$intro = (...args) => {
            return introJs(...args);
        };
        Vue.directive('intro', DIRECTIVES.intro);
        Vue.directive('intro-step', DIRECTIVES.step);
        Vue.directive('intro-position', DIRECTIVES.position);
        Vue.directive('intro-tooltip-class', DIRECTIVES.tooltipClass);
        Vue.directive('intro-highlight-class', DIRECTIVES.highlightClass);
        Vue.directive('intro-scroll-to', DIRECTIVES.scrollTo);
        Vue.directive('intro-disable-interaction', DIRECTIVES.disableIntegration);
        Vue.directive('intro-hint', DIRECTIVES.hint);
        Vue.directive('intro-hint-position', DIRECTIVES.hintPosition);
    }
};

export default Plugin;

export function autoregister() {
    if (window.Vue) {
        window.Vue.use(Plugin);
    }
}

autoregister();
