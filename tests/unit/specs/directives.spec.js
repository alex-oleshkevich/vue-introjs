import Vue from 'vue/dist/vue.common';
import { DIRECTIVES } from '~/directives';

define('directives', () => {
    it('v-intro should add data-intro attribute', () => {
        const Comp = Vue.extend({
            template: `<div v-intro="'content'"></div>`,
            directives: { intro: DIRECTIVES.intro }
        });
        const vm = new Comp().$mount();
        expect(vm.$el.dataset.intro).equals('content');
    });

    it('v-intro-step should add data-step attribute', () => {
        const Comp = Vue.extend({
            template: `<div v-intro-step="2"></div>`,
            directives: { introStep: DIRECTIVES.step }
        });
        const vm = new Comp().$mount();
        expect(vm.$el.dataset.step).equals('2');
    });

    it('v-intro-position should add data-position attribute', () => {
        const Comp = Vue.extend({
            template: `<div v-intro-position="'top'"></div>`,
            directives: { introPosition: DIRECTIVES.position }
        });
        const vm = new Comp().$mount();
        expect(vm.$el.dataset.position).equals('top');
    });

    it('v-intro-tooltip-class should add data-tooltipclass attribute', () => {
        const Comp = Vue.extend({
            template: `<div v-intro-tooltip-class="'red'"></div>`,
            directives: { introTooltipClass: DIRECTIVES.tooltipClass }
        });
        const vm = new Comp().$mount();
        expect(vm.$el.dataset.tooltipclass).equals('red');
    });

    it('v-intro-highlight-class should add data-highlightclass attribute', () => {
        const Comp = Vue.extend({
            template: `<div v-intro-highlight-class="'red'"></div>`,
            directives: { introHighlightClass: DIRECTIVES.highlightClass }
        });
        const vm = new Comp().$mount();
        expect(vm.$el.dataset.highlightclass).equals('red');
    });

    it('v-intro-scroll-to should add data-scrollto attribute', () => {
        const Comp = Vue.extend({
            template: `<div v-intro-scroll-to="'element'"></div>`,
            directives: { introScrollTo: DIRECTIVES.scrollTo }
        });
        const vm = new Comp().$mount();
        expect(vm.$el.dataset.scrollto).equals('element');
    });

    it('v-intro-disable-integration should add data-disable-integration attribute', () => {
        const Comp = Vue.extend({
            template: `<div v-intro-disable-integration="true"></div>`,
            directives: { introDisableIntegration: DIRECTIVES.disableIntegration }
        });
        const vm = new Comp().$mount();
        expect(vm.$el.dataset.disableIntegration).equals('true');
    });

    it('v-intro-hint should add data-hint attribute', () => {
        const Comp = Vue.extend({
            template: `<div v-intro-hint="'element'"></div>`,
            directives: { introHint: DIRECTIVES.hint }
        });
        const vm = new Comp().$mount();
        expect(vm.$el.dataset.hint).equals('element');
    });

    it('v-intro-hint-position should add data-hint-position attribute', () => {
        const Comp = Vue.extend({
            template: `<div v-intro-hint-position="'top'"></div>`,
            directives: { introHintPosition: DIRECTIVES.hintPosition }
        });
        const vm = new Comp().$mount();
        expect(vm.$el.dataset.hintposition).equals('top');
    });
});
