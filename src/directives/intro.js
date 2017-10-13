export default {
    bind(el, binding, vnode) {
        el.dataset.intro = binding.value;
        window.__introjsDiscovery.ping();
    }
};
