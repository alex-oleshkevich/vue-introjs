/* global introJs */
import { waitForDirectives } from '../utils';

let shown = false;

function startTour(el) {
    if (shown) {
        return;
    }
    shown = true;
    el.__introjs.start();
}

export default async(el, binding) => {
    if (binding.value === false) {
        return;
    }

    // set introjs instance to element
    if (!el.hasOwnProperty('__introjs')) {
        el.__introjs = introJs();
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
