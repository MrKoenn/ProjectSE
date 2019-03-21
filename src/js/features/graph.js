SPA.Chart = (function ($) {
    let chart;

    function _initModule() {
        $(document.documentElement).append("<canvas id='chart' width='500' height='500'></canvas>");
        const canvas = $("#chart");
        chart = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: ['White', 'Black'],
                datasets: [{
                    label: 'Points',
                    data: [0, 0],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                        'rgba(0, 0, 0, 0.4)'
                    ],
                    borderColor: [
                        'rgba(25, 25, 25, 1)',
                        'rgba(25, 25, 25, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        return true;
    }

    function _showChart(points) {
        chart.data.datasets.forEach((dataset) => {
            dataset.data = points;
        });
        chart.update();
    }

    return {
        initModule: _initModule,
        showChart: _showChart
    }
})(jQuery);