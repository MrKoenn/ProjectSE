let SPA = (function ($) {
    let _data;
    let _model;
    let _reversi;
    let _chart;

    let _wrapper;

    let configMap = {};

    function _initModule(wrapper) {
        _wrapper = wrapper;

        SPA.Data.initModule("development");
        SPA.Model.initModule();
        SPA.Reversi.initModule(wrapper);
        SPA.Chart.initModule();

        wrapper.append("<button id='bored'>I'm bored!</button>");
        $("#bored").click(function () {
            $.get("https://www.boredapi.com/api/activity/?participants=1", function (data) {
                let widget = new Widget(`You're bored? Well why don't you<br/>${data['activity']}`, "green");
                widget.show();
            });
        });
        return true;
    }

    return {
        initModule: _initModule,
        Data: _data,
        Model: _model,
        Reversi: _reversi,
        Chart: _chart
    }
})(jQuery);