describe("getBoard function", function () {
    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
        closeWidget();
    });

    it('should get the board from the REST API', async function () {
        spyOn($, 'ajax').and.callFake(function () {
            return $.Deferred().resolve({
                'board': []
            }).promise();
        });

        await SPA.Data.getBoard()
            .then(result => {
                expect(result["board"]).toBeDefined();
            });
    });

    it('should show a feedback widget when the request fails', async function () {
        spyOn($, 'ajax').and.callFake(function () {
            return $.Deferred().reject().promise();
        });

        await SPA.Data.getBoard();
        expect($("#widget")).not.toBeNull();
        expect($("#widget-message").text()).toBe("Failed to get the data from the server");
    });
});