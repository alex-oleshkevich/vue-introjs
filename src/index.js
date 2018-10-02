import * as components from './components';
import manager from './manager';

export * from './components';
export {manager};

const DEFAULT_OPTIONS = {
    prefix: 'intro-',
    prototypeName: '$tour'
};

const Plugin = {
    install(Vue, options) {
        options = Object.assign({}, DEFAULT_OPTIONS, options);

        Vue.prototype[options.prototypeName] = manager;
        Object.entries(components).forEach(([name, component]) => {
            Vue.component(`${options.prefix}${name.toLocaleLowerCase()}`, component);
        });
    }
};

export default Plugin;

export function autoregister() {
    if (window.Vue) {
        window.Vue.use(Plugin);
    }
}

autoregister();
