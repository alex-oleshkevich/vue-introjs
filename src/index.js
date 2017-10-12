import install from './install';

export default class VueIntro {

};

VueIntro.install = install;

if (window.Vue) {
    window.Vue.use(VueIntro);
}
