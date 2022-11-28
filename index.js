// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
  return drivers.slice(0,2)
}

returnFirstTwoDrivers();

const returnLastTwoDrivers = function() {
  return drivers.slice(-2);
}

returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(num1) {
    return function(fare) {
      return fare * num1;
    }

}

const fareMultiplier = createFareMultiplier(4);


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers,driverChoice) {
  if(driverChoice === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } else if( driverChoice === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
  }
}
selectDifferentDrivers(drivers,returnFirstTwoDrivers);
selectDifferentDrivers(drivers,returnLastTwoDrivers);

