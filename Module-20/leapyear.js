function LeapYearCheck(year) {
    if ((year % 4 == 0 && year % 100 != 0 )|| year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

const year = 2029;
console.log(LeapYearCheck(year));