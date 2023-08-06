function findLeapYears(yearsArray) {
    const leapYear = [];

    for (const year of yearsArray) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            leapYear.push(year);
        }
    }

    return leapYear;
}

const years = [2023, 2024, 2025, 2028, 2030];
const leapYears = findLeapYears(years);
console.log(leapYears);






