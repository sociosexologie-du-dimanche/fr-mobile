$(function () {
    $('#highchart1').highcharts({
        data: {
            columns: [
                [null, 'Non-religieux', 'Catholiques non pratiquants', 'Autres religions','Catholiques pratiquants'], // categories
                ["Jamais sucé", 11, 12, 21,23], // first series
                ["Jamais sodomisé", 45, 47, 45,63] // second series
            ]
        },
        colors : ['#0092B9','#004C59'],
        chart: {
            type: 'column',
            backgroundColor : null
        },
        title: {
            text: ''
        },
        yAxis: {
            allowDecimals: false,
            title :'',
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% parmi les ' + this.point.name.toLowerCase();
            }
        },

    });
});