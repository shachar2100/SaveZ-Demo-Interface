/**
 * Table.js -> Adds to the table as whell as shorts
 * Link : https://www.youtube.com/watch?v=ri5Nqe_IK50
 * Langutimes: Javascript
 * Written By: Shachar Habusha
 * Date Started: 8/26/2020 
 */

let sortDirection = false;


let allBathroomsRevesed = allBathroom.reverse();

//Load Data when window is refreshed
window.onload = () => {
    loadTableData(allBathroomsRevesed);
};

//Message Every % secods 
setTimeout(function(){ alert("Vaping Has Been Detected"); }, 5000);



function loadTableData(allBathroomsRevesed) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let school of allBathroomsRevesed){
        let zz = new Date(school.t);

        dataHtml+= '<tr><td>'+school.l+'</td><td>'+ zz.getHours() + ":" + zz.getMinutes()  +'</td><td>'+ zz.toDateString() +'</td></tr>';
    };
    console.log(dataHtml);
    
    tableBody.innerHTML = dataHtml;

} 

// function sortColumn(columnlocation){
//     const datatype = typeof allBathroomsRevesed[0][columnlocation];
//     // console.log(datatype);
//     sortDirection = !sortDirection;

//     switch(datatype){
//         case 'number':
//             sortNumberColumn(sortDirection, columnlocation);
//             break;
//         //Can add more sorts
//     }

//     // console.log(allBathroomsRevesed);

//     loadTableData(allBathroomsRevesed);
    
// }

// function sortNumberColumn(sort, columnlocation){
//     allBathroomsRevesed = allBathroomsRevesed.sort((p1,p2) => {
//             return sort ? p1[columnlocation] - p2[columnlocation] : p2[columnlocation] - p1[columnlocation]
//     });
// }
