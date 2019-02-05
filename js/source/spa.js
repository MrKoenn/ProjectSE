let SPA = (function ($) {
    let _data;
    let _model;
    let _reversi;

    let configMap = {};

    function _initModule() {
        return true;
    }

    return {
        initModule: _initModule,
        Data: _data,
        Model: _model,
        Reversi: _reversi
    }
})(jQuery);