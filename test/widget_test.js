describe("Feedback Widget", function () {
    afterEach(function () {
        closeWidget();
    });

    it('should have a function to show the widget', function () {
        expect(new Widget().show).toBeDefined();
    });

    it('should save the message to localstorage', function () {
        localStorage.removeItem("widget-messages");
        new Widget("Test Message");
        const storage = localStorage.getItem("widget-messages");

        expect(storage).not.toBeNull();

        const entry = JSON.parse(storage)[0];
        expect(entry.message).toBe("Test Message");
    });

    it('should show the message in the popup window', function () {
        const widget = new Widget("Test Message", "red");
        widget.show();

        expect($("#widget-message").text()).toBe("Test Message");

        closeWidget();
    });

    it('should change color depending on what input is given', function () {
        const widget = new Widget("Test Message", "red");
        widget.show();

        const widgetBody = $("#widget").children()[0];
        expect(widgetBody.className).toBe("widget red");

        closeWidget();
    });

    it('should remove the widget whenever the user clicks the close button', function () {
        const widget = new Widget("Test Message", "red");
        widget.show();

        $("#widget-close").trigger("click");

        expect(document.getElementById("widget")).toBeNull();
    });
});