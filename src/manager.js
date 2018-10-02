import introJs from 'intro.js';

export class Manager {
    constructor() {
        this.scenes = {};
    }

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
        this.scenes[name] = {
            steps: [], hints: [], options: options || {}
        };
        return this;
    }

    /**
     * Test if scene with given name already registered.
     *
     * @param {String} name - Scene name.
     * @return {boolean}
     */
    hasScene(name) {
        return Object.keys(this.scenes).includes(name);
    }

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
        return this.scenes[name];
    }

    /**
     * Add a step to scene.
     *
     * @param {String} scene - Scene name.
     * @param {Object} options - Step options.
     * @see https://introjs.com/docs/intro/attributes/
     */
    addStep(scene, options) {
        if (!this.hasScene(scene)) {
            this.addScene(scene);
        }

        this.getScene(scene).steps.push(options);
    }

    /**
     * Add a hint to scene.
     *
     * @param {String} scene - Scene name.
     * @param {Object} options - Step options.
     * @see https://introjs.com/docs/hints/attributes/
     */
    addHint(scene, options) {
        if (!this.hasScene(scene)) {
            this.addScene(scene);
        }

        this.getScene(scene).hints.push(options);
    }

    /**
     * Returns steps for scene ordered by step number.
     *
     * @param scene
     * @returns {Array}
     */
    getSteps(scene) {
        const steps = this.getScene(scene).steps;

        const knownSteps = steps.filter(step => !!step.step).map(step => parseInt(step.step));
        let nextStep = 0;
        steps
            .filter(step => !step.step)
            .forEach(step => {
                /* eslint-disable-next-line no-constant-condition */
                while (true) {
                    nextStep++;
                    if (!knownSteps.includes(nextStep)) {
                        step.step = nextStep;
                        break;
                    }
                }
            });
        steps.sort((a, b) => a.step > b.step);
        return steps;
    }

    /**
     * Start the tour for a given scene.
     *
     * @param {String} scene - Scene name.
     */
    start(scene = 'default', element = undefined) {
        const sceneConfig = this.getScene(scene);
        if (sceneConfig.steps.length === 0) {
            return;
        }

        return introJs(element)
            .setOptions(sceneConfig.options)
            .addSteps(this.getSteps(scene))
            .start();
    }

    /**
     * Show all hints.
     *
     * @param {String} scene - Scene name.
     */
    showHints(scene = 'default', element = undefined) {
        const sceneConfig = this.getScene(scene);
        const options = Object.assign(sceneConfig.options, {hints: sceneConfig.hints});
        return introJs(element)
            .setOptions(options)
            .showHints();
    }
}

export default new Manager();