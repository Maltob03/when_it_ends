var config = {
    type: 'bar',
      data: {
          datasets: [{
              type: 'line',
              AxisID: 'number',
              
          }, {
              yAxisID: 'total_vaccinations',
              
          }]
    },
      plugins: [ChartDataSource],
      options: {
          title: {
              display: false,
              text: 'CSV data source (index) sample'
          },
          scales: {
              xAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: '             N. giorni dal V-day'
                  }
              }],
              yAxes: [{
          id: 'total_vaccinations',
                  gridLines: {
                      drawOnChartArea: false
                  },
                  scaleLabel: {
                      display: true,
                      labelString: 'Aggiornamento giornaliero numero Vaccinati'
                  }
              }, {
                  id: 'total_vaccinations',
                  position: 'right',
                  gridLines: {
                      drawOnChartArea: false
                  },
                  scaleLabel: {
                      display: true,
                      labelString: 'Vaccinazioni'
                  }
              }]
          },
          plugins: {
              datasource: {
                  type: 'csv',
                  url: 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/country_data/Italy.csv',
                  delimiter: ',',
                  rowMapping: 'index',
                  datasetLabels: true,
                  indexLabels: false
              }
              
      },
      
      legend: {
              display: false
           },
           tooltips: {
              enabled: true
           },
          }
  };
  
  window.onload = function() {
      var ctx = document.getElementById('myChart').getContext('2d');
      window.myChart = new Chart(ctx, config);
    
  };



    // The data/time we want to countdown to
    var countDownDate = new Date("Mar 12, 2021 10:00:00").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);
