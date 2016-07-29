var Data = '{"teams":["Toaster in the Bathtub","JK","iN Code","EZ 011011","Hack && Axe || Vikings","@echo off","All UR flags R belong 2 us","Digital Synergy","Indestructible Plastic","Hawk\'s Leverage"],"scores":[{"y": 8700, "color": "gold", "url": "team1.html"},{"y": 7000, "color": "silver", "url": "team3.html"},{"y": 6600, "color": "#FF7F00", "url": "team10.html"},{"y": 6500, "color": "black", "url": "team8.html"},{"y": 6300, "color": "black", "url": "team2.html"},{"y": 5000, "color": "black", "url": "team4.html"},{"y": 4550, "color": "black", "url": "team9.html"},{"y": 4300, "color": "black", "url": "team5.html"},{"y": 3500, "color": "black", "url": "team7.html"},{"y": 3100, "color": "black", "url": "team6.html"}]}';

Results = JSON.parse(Data);

console.log(Results);



  $(function () {
      var chart = new Highcharts.Chart({
			chart: {
                type: 'bar',
				renderTo: 'scoreboard'
            },
            title: {
                text: 'Final Scoreboard'
            },
            xAxis: {
                categories: Results.teams,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Points',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' points'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                },
				series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                            location.href = this.options.url;
                        }
                    }
                }
				}
            },
            credits: {
                enabled: false
            },
            series: [{
				name: 'Current Points',
				color: 'black',
                data: Results.scores,
				showInLegend:false
            }]

	});
});