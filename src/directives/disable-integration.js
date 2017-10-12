export default {
    bind(el, binding) {
        el.dataset.disableIntegration = binding.value;
    }
};
