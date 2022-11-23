// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


function returnFirstTwoDrivers(){
  const newArray = drivers.slice(0, -2);
  return newArray
}

function returnLastTwoDrivers(){
  const newArray2 = drivers.slice(2);
  return newArray2
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
  return function (fare){
    return integer * fare;
  }
}

function fareDoubler(fare) {
  const fareTimestwo = createFareMultiplier(2);
  return fareTimestwo(fare);
} 

function fareTripler(fare) {
  const fareTimesThree= createFareMultiplier(3);
  return fareTimesThree(fare);
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
}

