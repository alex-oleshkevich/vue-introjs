import introJs from 'intro.js';

/**
 * Keeps all registered scenes.
 */
const scenes = {};

export default {
    /**
     * Add a new scene.
     *
     * @param {String} name - Scene name.
     * @param {Object} options - Scene options.
     * @throws {Error} When scene with given name already registered.
     * @returns {this}
     * @see https://introjs.com/docs/intro/options/
     */
    addScene(name, options) {
        if (this.hasScene(name)) {
            throw new Error(`vue-introjs: "${name}" already exists. Please, use another name.`);
        }
        scenes[name] = {
            steps: [], hints: [], options: options || {}
        };
        return this;
    },

    /**
     * Test if scene with given name already registered.
     *
     * @param {String} name - Scene name.
     * @return {boolean}
     */
    hasScene(name) {
        return Object.keys(scenes).includes(name);
    },

    /**
     * Returns scene by name.
     *
     * @param {String} name - Scene name.
     * @throws {Error} When scene does not exist.
     * @return {Object}
     */
    getScene(name) {
        if (!this.hasScene(name)) {
            throw new Error(`vue-introjs: Scene "${name}" is not defined.`);
        }
        return scenes[name];
    },

    /**
     * Add a step to scene.
     *
     * @param {String} name - Scene name.
     * @param {Object} options - Step options.
     * @see https://introjs.com/docs/intro/attributes/
     */
    addStep(scene, options) {
        if (!this.hasScene(scene)) {
            this.addScene(scene);
        }

        this.getScene(scene).steps.push(options);
    },

    /**
     * Start the tour for a given scene.
     *
     * @param {String} name - Scene name.
     */
    start(scene = 'default') {
        const sceneConfig = this.getScene(scene);
        introJs()
            .setOptions(sceneConfig.options)
            .addSteps(sceneConfig.steps)
            .start();
    }
};