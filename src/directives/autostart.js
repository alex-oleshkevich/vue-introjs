/* global introJs */

let shown = false;

function startTour(steps) {
    if (shown) {
        return;
    }
    shown = true;
    introJs().start();
}

function waitForSteps(steps) {
    return new Promise((resolve, reject) => {
        if (window.__introjsDiscovery.ready) {
            resolve();
        } else {
            window.__introjsDiscovery.$on('ready', f => {
                resolve();
            });
        }
    });
}

export default async(el, binding) => {
    if (binding.value === false) {
        return;
    }

    try {
        await waitForSteps();
        startTour();
    } catch (e) {
        console.error(e);
    }
};
