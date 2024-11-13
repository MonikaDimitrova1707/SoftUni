function isOfficeOpen(hour, day) {
    const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const openingHour = 10;
    const closingHour = 18;

    if (workingDays.includes(day)) {
        if (hour >= openingHour && hour < closingHour) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}

isOfficeOpen(11, "Sunday"); 