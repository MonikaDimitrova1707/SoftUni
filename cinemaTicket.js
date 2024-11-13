function getTicketPrice(day) {
    let price;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            price = 12;
            break;
        case "Wednesday":
        case "Thursday":
            price = 14;
            break;
        case "Saturday":
        case "Sunday":
            price = 16;
            break;
        default:
            console.log("Error: Invalid day");
            return; 
    }

    console.log(price);
}

getTicketPrice("Monday");