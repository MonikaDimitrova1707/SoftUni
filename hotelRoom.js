function calculateAccommodationCost(month, nights) {
    let studioPricePerNight;
    let apartmentPricePerNight;

    if (month === "May" || month === "October") {
        studioPricePerNight = 50;
        apartmentPricePerNight = 65;
    } else if (month === "June" || month === "September") {
        studioPricePerNight = 75.20;
        apartmentPricePerNight = 68.70;
    } else if (month === "July" || month === "August") {
        studioPricePerNight = 76;
        apartmentPricePerNight = 77;
    } else {
        console.log("Invalid month");
        return;
    }

    let totalStudioCost = studioPricePerNight * nights;
    let totalApartmentCost = apartmentPricePerNight * nights;

    if (month === "May" || month === "October") {
        if (nights > 14) {
            totalStudioCost *= 0.70;
        } else if (nights > 7) {
            totalStudioCost *= 0.95; 
        }
    } else if (month === "June" || month === "September") {
        if (nights > 14) {
            totalStudioCost *= 0.80;
        }
    }

    if (nights > 14) {
        totalApartmentCost *= 0.90; 
    }

    console.log(`Apartment: ${totalApartmentCost.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioCost.toFixed(2)} lv.`);
}

calculateAccommodationCost("June", 14); 