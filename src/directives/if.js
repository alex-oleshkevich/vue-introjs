export default {
    bind(el, binding, vnode) {
        if (binding.value === false) {
            delete el.dataset.intro;
            delete el.dataset.hint;
        }
    }
};
