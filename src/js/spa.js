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