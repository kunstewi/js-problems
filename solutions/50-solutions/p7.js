// Create a program that checks if a given year is a leap year.


function checkLeapYear(year){
    if(year % 4 === 0 & year % 100 !== 0 || year % 400 === 0){
        return "Leap Year";
    } else {
        return "Not a Leap year";
    }
}

console.log(checkLeapYear(2004));

// Arrow Function

let isLeapYear = (year) => {
    if(year % 4 === 0 & year % 100 !== 0 || year % 400 === 0){
        return "Leap Year"
    } else {
        return "Not a Leap Year"
    }
}

console.log(isLeapYear(1700));