import manager from './manager';

describe('manager.js', () => {
    it('should add scene', () => {
        const options = {
            steps: []
        };
        manager.addScene('scenename', options);

        expect(manager.hasScene('scenename')).toBeTruthy();
    });

    it('should throw an exception if scene exists', () => {
        manager.addScene('scenename');
        manager.addScene('scenename');

        expect(manager.hasScene('scenename')).toBeTruthy();
    });
});