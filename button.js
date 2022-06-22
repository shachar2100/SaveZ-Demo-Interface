
    function myBathroom() {
        var x = document.getElementById("dropDown").value;

        if(x == "girl"){

            myChart.data.datasets[0].data = girlsBathroom;         
            myChart.data.datasets[0].backgroundColor[0] = 'rgba(255, 204, 250, 1)';
        }else if(x == "boy"){

            myChart.data.datasets[0].data = boysBathroom; 
            myChart.data.datasets[0].backgroundColor[0] = 'rgba(30, 115, 190, 100)';  
            
        }else{

            myChart.data.datasets[0].data = allBathroom;  
            myChart.data.datasets[0].backgroundColor[0] = 'rgba(224, 224, 224, 1)';  
        }

        myChart.update();        
    }

    function oneDay(){

        myChart.options.scales.xAxes[0].time.min=new Date().setHours(6);
        myChart.options.scales.xAxes[0].time.unit = 'hour';
        myChart.update(); 
        upDate();
    }

    function fiveDay(){
        
        myChart.options.scales.xAxes[0].time.min= new Date(new Date().getTime() - (5 * 24 * 60 * 60 * 1000));
        myChart.options.scales.xAxes[0].time.unit = 'day';
        myChart.update(); 
        upDate();
    }

    function oneMonth(){
          
        myChart.options.scales.xAxes[0].time.min= new Date(new Date().getTime() - (1*28*24*60*60*1000));
        myChart.options.scales.xAxes[0].time.unit = 'day';
        myChart.update();
        upDate();
    }

    function sixMonth(){      
   
        myChart.options.scales.xAxes[0].time.min= new Date(new Date().getTime() - (6*28*24*60*60*1000));
        myChart.options.scales.xAxes[0].time.unit = 'month';
        myChart.update();
        upDate();
    }

    function max(){

        myChart.options.scales.xAxes[0].time.min= new Date(new Date().getTime() - (6*28*24*60*60*1000));
        myChart.options.scales.xAxes[0].time.unit = 'month';
        myChart.update();
        upDate();
    }


    function previousDay(){
       let maxTemp = new Date(myChart.options.scales.xAxes[0].time.max);   
       let minTemp = new Date(myChart.options.scales.xAxes[0].time.min);   
       myChart.options.scales.xAxes[0].time.max = new Date(maxTemp.getTime() - (1 * 24 * 60 * 60 * 1000));
       myChart.options.scales.xAxes[0].time.min = new Date(minTemp.getTime() - (1 * 24 * 60 * 60 * 1000));
       myChart.update();
       upDate();
    }

    function nextDay(){
        let maxTemp = new Date(myChart.options.scales.xAxes[0].time.max);  
        let minTemp = new Date(myChart.options.scales.xAxes[0].time.min); 
        myChart.options.scales.xAxes[0].time.max = new Date(maxTemp.getTime() + (1 * 24 * 60 * 60 * 1000));
        myChart.options.scales.xAxes[0].time.min = new Date(minTemp.getTime() + (1 * 24 * 60 * 60 * 1000));
        myChart.update();
        upDate();
    }

    function upDate(){

        let maxTemp = new Date(myChart.options.scales.xAxes[0].time.max);  
        let minTemp = new Date(myChart.options.scales.xAxes[0].time.min); 

        if( maxTemp.toDateString() ==  minTemp.toDateString()){
            document.getElementById("dateAboveChart").innerHTML = maxTemp.toDateString();
        }else{
            document.getElementById("dateAboveChart").innerHTML = minTemp.toDateString() + " - "+ maxTemp.toDateString();
        }      
        
    }

   