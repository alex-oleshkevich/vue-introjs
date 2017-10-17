export function waitForDirectives(steps) {
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
