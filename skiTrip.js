function calculateHotelCost(days, roomType, feedback) {
    let nights = days - 1;
    let pricePerNight = 0;

    if (roomType === "room for one person") {
        pricePerNight = 18.00;
    } else if (roomType === "apartment") {
        pricePerNight = 25.00;
    } else if (roomType === "president apartment") {
        pricePerNight = 35.00;
    }

    let totalPrice = nights * pricePerNight;

    if (roomType === "apartment") {
        if (nights < 10) {
            totalPrice *= 0.70; 
        } else if (nights <= 15) {
            totalPrice *= 0.65; 
        } else {
            totalPrice *= 0.50; 
        }
    } else if (roomType === "president apartment") {
        if (nights < 10) {
            totalPrice *= 0.90; 
        } else if (nights <= 15) {
            totalPrice *= 0.85; 
        } else {
            totalPrice *= 0.80; 
        }
    }

    if (feedback === "positive") {
        totalPrice *= 1.25;
    } else if (feedback === "negative") {
        totalPrice *= 0.90;
    }

    console.log(totalPrice.toFixed(2));
}

calculateHotelCost(14, "apartment", "positive");