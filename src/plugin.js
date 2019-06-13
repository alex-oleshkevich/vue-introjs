import * as components from './components';

export default {
    install(Vue) {
        Object.entries(components).forEach(([name, component]) =>
            Vue.component(name, component),
        );
    },
};
