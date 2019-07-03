/*
 Template Name: Lexa - Responsive Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Flot chart Init
 */


!function($) {
    "use strict";

    var FlotChart = function() {
        this.$body = $("body")
        this.$realData = []
    };

    

    //creates Pie Chart
    FlotChart.prototype.createPieGraph = function(selector, labels, datas, colors) {
        var data = [{
            label: labels[0],
            data: datas[0]
        }, {
            label: labels[1],
            data: datas[1]
        }, {
            label: labels[2],
            data: datas[2]
        }];
        var options = {
            series: {
                pie: {
                    show: true
                }
            },
            legend : {
				show : true
			},
			grid : {
				hoverable : true,
				clickable : true
			},
			colors : colors,
			tooltip : true,
			tooltipOpts : {
				content : "%s, %p.0%"
			}
        };

        $.plot($(selector), data, options);
    },



    //creates Pie Chart
    FlotChart.prototype.createDonutGraph = function(selector, labels, datas, colors) {
        var data = [{
            label: labels[0],
            data: datas[0]
        }, {
            label: labels[1],
            data: datas[1]
        }, {
            label: labels[2],
            data: datas[2]
        },
        {
            label: labels[3],
            data: datas[3]
        }];
        var options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.7
                }
            },
            legend : {
				show : true,
				labelFormatter : function(label, series) {
					return '<div style="font-size:14px;">&nbsp;' + label + '</div>'
				},
				
			},
			grid : {
				hoverable : true,
				clickable : true
			},
			colors : colors,
			tooltip : true,
			tooltipOpts : {
				content : "%s, %p.0%"
			}
        };

        $.plot($(selector), data, options);
    },

        //initializing various charts and components
        FlotChart.prototype.init = function() {
         
          //Pie graph data
          var pielabels = ["Available","Allocated","Spent"];
          var datas = [29,20, 18];
          var colors = ['#7a6fbe','#28bbe3', "#ebeff2"];
          this.createPieGraph("#pie-chart #pie-chart-container", pielabels , datas, colors);

            //Donut pie graph data
          var donutlabels = ["Available","Allocated","Spent"];
          var donutdatas = [29,20, 18];
          var donutcolors = ['#7a6fbe','#28bbe3', "#ebeff2"];
          this.createDonutGraph("#donut-chart #donut-chart-container", donutlabels , donutdatas, donutcolors);
        },

    //init flotchart
    $.FlotChart = new FlotChart, $.FlotChart.Constructor = FlotChart

}(window.jQuery),

//initializing flotchart
function($) {
    "use strict";
    $.FlotChart.init()
}(window.jQuery);


