export function getCurrentDateTime() {
    let currentDate = new Date();
    
    let day = currentDate.getDay(); // Returns the day of the week (0-6)
    let month = currentDate.getMonth(); // Returns the month (0-11)
    let date = currentDate.getDate(); // Returns the day of the month (1-31)
    let year = currentDate.getFullYear(); // Returns the year (4 digits)

    // Array of days of the week
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Array of months
    let monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Getting the day and month names from arrays
    let currentDay = daysOfWeek[day];
    let currentMonth = monthsOfYear[month];

    // Returning an object with the current date and time components
    return  `${currentDay}, ${currentMonth}, ${date}, ${year}`;
}

// Example usage
// let currentDateTime = getCurrentDateTime();
// console.log(currentDateTime);
