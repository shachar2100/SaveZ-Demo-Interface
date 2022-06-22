
    var ctx = document.getElementById('myChart').getContext('2d');  
 
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {                 
            datasets: [{                
                data: allBathroom,
                backgroundColor: [
                    'rgba(224, 224, 224, 1)'							
                ],
                borderColor: [                    
                    'black',						
                ],
                borderWidth: 2
            }]
        },
        options: {
            legend:{
                display: false
            },
            elements:{
                line:{
                    tension: 0.05, // Tension of line
                }
            },
            scales: {
              xAxes: [{
                type: 'time',
                // distribution: 'series',
                
                ticks: {
                        source: 'label',
                         maxTicksLimit: 20,
                         source: 'label',
                        display: true,
                        autoSkip: true,                       
                        // minRotation: 5,
                            
                        },
                time: {
                    // unit: 'day',
                    unit: 'hour',
                    //minDate
                    min: new Date().setHours(6),
                    //maxDate
                    max: new Date().setHours(15),
                    
                
                },
                scaleLabel: {
                    display: true,
                    // labelString: 'Time'
                  }
              }],
              yAxes: [{
                  ticks: {
                        suggestedMin: 0,
                        suggestedMax: 10,
                        callback: function(value) {if (value % 1 === 0) {return value;}} // Making y-axis only hole #
                  },
                   position: 'left',
                   gridLines: {
                     zeroLineColor: 'black'	
                   },
                        
                   scaleLabel: {
                     display: true,
                     labelString: 'Dispreferences'
                   }
             }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {

                        var label = data.datasets[tooltipItem.datasetIndex].label || '';
                                             
                        if (label) {
                            label += ': ';
                        }
                        let currentData = myChart.data.datasets[0].data;
                        label += findEntryByLabelAndValue(tooltipItem.xLabel,tooltipItem.yLabel,currentData);
                        return label;
                    }
                }
            }
        }
    });
    upDate();

/**
 * As long as myChart.getSegmentsAtEvent() does not return all keys from dataset,
 *      we can search an specif dataGraph entry by "value" and "value" keys.
 *      In fact, you could provide an unique ID so it would be a lot easier
 *      to implement (findById(id, dataset)), because you could to search by ID,
 *      instead of label/value keys together
 *
 * @param {string} label The dataset["label"] value
 * @param {*date} value      The dataset["value"] value
 * @param {Object} dataGraph The dataGraph to search in
 *
 * @returns {Object} Object or null (if not found data entry)
 */

function findEntryByLabelAndValue(label, value, dataset) {

    var keys = Object.keys(dataset);  
    
      for (var key = 0; key < keys.length; key++) {
  
        var today = new Date(label);
  
        var today2 = new Date(dataset[key].t);     
      
        var time = today2.getTime() - today2.getTime()%1000;
         
        if  ( today.getTime() == time && dataset[key].y == value) {
          
          return dataset[key].l;
        }
  
      }
      return null;
  }

