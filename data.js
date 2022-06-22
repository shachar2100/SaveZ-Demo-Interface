/**
 * date.js -> Makes the Data
 * the tables, time and generate randome content. 
 * Langueges: Javascript
 * Written By: Shachar Habusha
 * Date Started: 8/28/2020 
 */


/**
 * Function That Creates Randome hours
 * 7-17
 */
function randHours(){

    return (Math.floor(Math.random()*10) + 7);
}


/**
 * Function That Creates Randome minutes
 */
function randMinute() {

    return (Math.floor(Math.random()*58) + 1);
}

/**
 * Function That Creates Randome Hole Numbers
 */
function randNum(num) {

    return (Math.floor(Math.random()*num));
}

/**
 * Function that generates the push back for the Arayys
 * in the for loop
 */

 function interferences(rand, hour1, hdiffrence, min1, mdiffrence, dayBack){

    var day = new Date(new Date().getTime() - (dayBack * 24 * 60 * 60 * 1000));
    
    //Checks if weekend
    if(day.getDay() % 6){

       
        
            randomeNum = randNum(rand) + 1;

            for(i = 0; i < randomeNum; i++){
        
                boysBathroom.push({            
                    t: day.setHours(randNum(hdiffrence) + hour1, randNum(mdiffrence) + min1 , randMinute()),
                    y:1,             
                    l: locations[randNum(4)]
                });
            
                girlsBathroom.push({            
                t: day.setHours(randNum(hdiffrence) + hour1, randNum(mdiffrence) + min1 , randMinute()),
                y:1,             
                l: locations[randNum(4) + 4]
                });
            }
    
    
    }
   

 }

/*************************************************************** */
  /** 
   * Creating the content for the day's/Table
  */
 let locations = ['Boys Bathroom 1','Boys Bathroom 2','Boys Bathroom 3','Boys Bathroom 4','Girls Bathroom 1','Girls Bathroom 2','Girls Bathroom 3','Girls Bathroom 4'];

 //Creating arrays for girls and boys
 let boysBathroom = [];
//  let boysBathroom =  [{            
//     t: new Date().setHours(8, randMinute() , randMinute()),
//     y:1,             
//     l: locations[randNum(4)]
//    },];
 let girlsBathroom = [];
//  let girlsBathroom = [ {            
//     t: new Date().setHours(8, randMinute() , randMinute()),
//     y:1,             
//     l: locations[randNum(4) + 4]
//    },];


var numberDays = 20;// Number of days Generated back.
var randomeNum = 0;

    for(var s = 0; s < numberDays; s++){      

        /**
        * Before School 7-7:30 AM
        */
         interferences(7,7,0,0,30,s);

        /**
        * Period 1 or 2 7:40-9:20AM
        */
         interferences(10,7,2,0,60,s);        

        /**
        * Break 9:20-9:25
        */
         interferences(3,9,0,20,5,s); 
       
        /**
        * Period 3 9:30 – 10:25 
        */
         interferences(7,9,1,0,30,s); 

        /**
        * Break 10:25 – 10:30 
        */
         interferences(5,10,0,25,5,s); 

        /**
        * Period 5 or 4 10:35 – 12:15
        */
         interferences(8,10,2,0,60,s); 

        /**
        * Lunch 12:15 – 12:50 35 minutes
        */
         interferences(20,12,0,15,35,s); 

        /**
        * Period 7 or 6 12:55 – 2:35 100 minutes
        */
         interferences(10,12,2,0,60,s); 

        /**
        * After School 2:35-4:00
        */
         interferences(10,14,1,0,60,s);

       
    }   

//Creating contat array
let tempArray = girlsBathroom.concat(boysBathroom);
//Shorting all arrays
boysBathroom = arrayGrouper(boysBathroom,5);
girlsBathroom = arrayGrouper(girlsBathroom,5);
let allBathroom = arrayGrouper(tempArray, 5);// connecting both arrays :)




/*************************************************************** */

/**
 *  arrayGrouper -> returns new array that groups in interval of a 
 *  certain amount of time(minutes).
 */
function arrayGrouper( data , minutes ){
    
    var sizeOfArray = data.length;
   

    //Shorting the Array given by date :)
    data.sort((a, b) => {
      var x = new Date(a.t);
      var y = new Date(b.t);
      if (x.getTime() < y.getTime()) {return -1;}
      if (x.getTime() > y.getTime()) {return 1;}
      return 0;
    });  

   
    
    let newData = [{            
        t: new Date(),
        y: 1,
        l: data[0].l
    }];


    var newDataLocation = 0;
    var oldDataLocation = 0;

    var detection = 1;
    var location = data[oldDataLocation].l;
     var minDate = data[oldDataLocation].t;
    var timeDif = minDate + minutes*1000; 

    for(oldDataLocation = 1; oldDataLocation < data.length; oldDataLocation++){

        console.log(oldDataLocation);

        if( data[oldDataLocation].t < timeDif){

            location += ", " + data[oldDataLocation].l;
            detection++;
            
        } else{

          newData[newDataLocation] = {
              t: new Date(minDate),
              y: detection,
              l: location
          };

          newDataLocation++;
        

          detection = 1;
          location = data[oldDataLocation].l;
          minDate =  data[oldDataLocation].t;
          timeDif = minDate + minutes*60000;          
        }
    }
  
    //Last group
    newData[newDataLocation] = {
              t: new Date(minDate),
              y: detection,
              l: location
    };
  
    
    return newData;       

}

