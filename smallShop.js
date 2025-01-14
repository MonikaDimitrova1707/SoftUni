function calculatePrice(product, city, quantity) {
    const prices = {
        Sofia: {
            coffee: 0.50,
            water: 0.80,
            beer: 1.20,
            sweets: 1.45,
            peanuts: 1.60,
        },
        Plovdiv: {
            coffee: 0.40,
            water: 0.70,
            beer: 1.15,
            sweets: 1.30,
            peanuts: 1.50,
        },
        Varna: {
            coffee: 0.45,
            water: 0.70,
            beer: 1.10,
            sweets: 1.35,
            peanuts: 1.55,
        }
    };

    if (prices[city] && prices[city][product]) {
        const totalPrice = prices[city][product] * quantity;
        console.log(totalPrice);
    } else {
        console.log("Error: Invalid product or city");
    }
}

calculatePrice("coffee", "Varna", 2); 