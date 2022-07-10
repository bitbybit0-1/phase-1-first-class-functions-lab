const  returnFirstTwoDrivers= (arrayOfNames)=>arrayOfNames.slice(0,2);
const returnLastTwoDrivers= (arrayOfNames)=>arrayOfNames.slice(-2);

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];


function fareDoubler(x){
    return x*2
}function fareTripler(x){
    return x*3
   } 
   function selectDifferentDrivers(arrayOfDrivers,drivers) {
        return drivers(arrayOfDrivers)
        
   }
   
   function createFareMultiplier(x){
    return function (x){
        return x*5
    }
       
    }
//function selectDifferentDrivers
