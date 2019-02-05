describe('Module Template', function () {
    it('should not return undefined', function () {
        expect(module).toBeDefined();
    });

    it('should have an initModule function', function () {
        expect(module.initModule).toBeDefined();
    });

    it('should have a private configMap', function () {
        expect(module._configMap).not.toBeDefined();
    });
});