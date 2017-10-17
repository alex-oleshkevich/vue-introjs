/* global introJs */
import { waitForDirectives } from '../utils';

let shown = false;

function startTour(el) {
    if (shown) {
        return;
    }
    shown = true;

    // autostart tour
    el.__introjs.start();

    // if flag, autoshow hints
    if ('__introjsAutoHints' in el) {
        el.__introjs.showHints();
    }
}

export default async(el, binding) => {
    if (binding.value === false) {
        return;
    }

    // set introjs instance to element
    if (!el.hasOwnProperty('__introjs')) {
        el.__introjs = introJs();
    }

    if (binding.arg === 'hints') {
        el.__introjsAutoHints = true;
    }

    // configure introjs
    if ('config' in binding.modifiers) {
        el.__introjs.setOptions(binding.value);
        return;
    }

    try {
        await waitForDirectives();
        startTour(el);
    } catch (e) {
        console.error(e);
    }
};
