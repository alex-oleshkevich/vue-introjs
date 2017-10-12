export default {
    bind(el, binding) {
        el.dataset.hint = binding.value;
    }
};
