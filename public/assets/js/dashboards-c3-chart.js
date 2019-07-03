/*
 Template Name: Lexa - Responsive Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: C3 Chart init js
 */

!function($) {
    "use strict";

    var ChartC3 = function() {};

    ChartC3.prototype.init = function () {
        //Donut Chart
        c3.generate({
             bindto: '#donut-chart',
             
            data: {
                columns: [
                    ['Availlable', 75],
                    ['Allocated', 40],
                    ['Spent', 25]
                ],
                type : 'donut'
            },
            donut: {
                width: 30,
				label: { 
					show:true,
					format: function (value, ratio, id) {
						return (ratio * 100).toFixed(0).toString()
    				}
				}
            },
            color: {
            	pattern: ['#7a6fbe', '#28bbe3', '#2f8ee0']
            }
        });
        
        //Pie Chart
        c3.generate({
             bindto: '#pie-chart',
            data: {
                columns: [
                    ['Availlable', 55],
                    ['Allocated', 40],
                    ['Spent', 25]
                ],
                type : 'pie'
            },
            color: {
                pattern: ['#7a6fbe', '#28bbe3', '#2f8ee0']
            },
            pie: {
		        label: {
		          show: false
		        }
		    }
        });

    },
    $.ChartC3 = new ChartC3, $.ChartC3.Constructor = ChartC3

}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.ChartC3.init()
}(window.jQuery);



