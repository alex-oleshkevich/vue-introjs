import {Manager} from '@/manager';

describe('manager.js', () => {
    it('should add scene', () => {
        const options = {
            steps: []
        };
        const manager = new Manager();
        manager.addScene('scenename', options);

        expect(manager.hasScene('scenename')).toBeTruthy();
    });

    test('should throw an exception if scene exists', () => {
        const manager = new Manager();
        manager.addScene('scenename');
        expect(() => manager.addScene('scenename')).toThrow();
    });

    test('should check that scene exists', () => {
        const manager = new Manager();
        expect(manager.hasScene('scenename')).toBeFalsy();
        manager.addScene('scenename');
        expect(manager.hasScene('scenename')).toBeTruthy();
    });

    test('should return a scene', () => {
        const manager = new Manager();
        manager.addScene('scenename');
        expect(manager.getScene('scenename')).toBeTruthy();
    });

    test('should getScene should error if scene does not exists', () => {
        const manager = new Manager();
        expect(() => manager.getScene('scenename')).toThrow();
    });

    test('should addStep to scene', () => {
        const manager = new Manager();
        manager.addScene('scenename');

        manager.addStep('scenename', {});
        expect(manager.getScene('scenename').steps).toHaveLength(1);
    });

    test('should addHint to scene', () => {
        const manager = new Manager();
        manager.addScene('scenename');

        manager.addHint('scenename', {});
        expect(manager.getScene('scenename').hints).toHaveLength(1);
    });

    test('getSteps should return ordered steps', () => {
        const manager = new Manager();
        manager.addScene('scenename');
        manager.addStep('scenename', {intro: '1'});
        manager.addStep('scenename', {step: 1, intro: '2'});
        manager.addStep('scenename', {intro: '3'});

        const steps = manager.getSteps('scenename');
        expect(steps[0].intro).toEqual('2');
        expect(steps[1].intro).toEqual('1');
        expect(steps[2].intro).toEqual('3');
    });

    test('start() should not start if not steps defined', () => {
        const manager = new Manager();
        manager.addScene('scenename');
        expect(manager.start('scenename')).toBeFalsy();
    });

    test('start() should start tour', () => {
        const manager = new Manager();
        manager.addScene('scenename');
        manager.addStep('scenename', {});
        expect(manager.start('scenename')).toBeTruthy();
    });

    test('start() should start tour', () => {
        const manager = new Manager();
        manager.addScene('scenename');
        manager.addHint('scenename', {element: document.body});
        expect(manager.showHints('scenename')).toBeTruthy();
    });
});