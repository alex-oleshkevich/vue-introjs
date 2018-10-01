import introJs from 'intro.js';

const scenes = {};

export default {
    addScene(name, options) {
        if (this.hasScene(name)) {
            throw new Error(`vue-introjs: "${name}" already exists. Please, use another name.`);
        }
        scenes[name] = {
            steps: [], hints: [], options: options || {}
        };
    },
    hasScene(name) {
        return Object.keys(scenes).includes(name);
    },
    getScene(name) {
        if (!this.hasScene(name)) {
            throw new Error(`vue-introjs: Scene "${name}" is not defined.`);
        }
        return scenes[name];
    },

    addStep(scene, options) {
        if (!this.hasScene(scene)) {
            this.addScene(scene);
        }

        this.getScene(scene).steps.push(options);
    },

    start(scene = 'default') {
        const sceneConfig = this.getScene(scene);
        introJs()
            .setOptions(sceneConfig.options)
            .addSteps(sceneConfig.steps)
            .start();
    }
};