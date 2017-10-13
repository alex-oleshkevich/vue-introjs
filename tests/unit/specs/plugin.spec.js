import Vue from 'vue/dist/vue.common';
import sinon from 'sinon';

import Plugin from '~/index';
import { autoregister } from '~/index';

define('plugin', () => {
    it('should add $intro variable to vue prototype', () => {
        Vue.use(Plugin);
        const vm = new Vue();
        expect(vm.$intro.constructor).equals(Function);
    });

    it('$intro() should return new introJs instance', () => {
        const spy = sinon.spy();
        window.introJs = spy;
        Vue.use(Plugin);
        const vm = new Vue();
        vm.$intro();
        expect(spy).to.be.called;
    });

    it('$intro() should pass arguments to introJs', () => {
        const spy = sinon.spy();
        window.introJs = spy;
        Vue.use(Plugin);
        const vm = new Vue();
        const params = { a: 1 };
        vm.$intro(params);
        expect(spy).to.be.calledWith(params);
    });

    it('should autoregister in window has Vue', () => {
        window.Vue = Vue;
        autoregister();
        const vm = new Vue();
        expect(vm.$intro.constructor).equals(Function);
    });

    it('should autoregister discovery service', () => {
        Vue.use(Plugin);
        expect(window.__introjsDiscovery).to.be.ok;
    });
});
