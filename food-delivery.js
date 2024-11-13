function foodDelivery(chickenMenu, fishMenu, veggieMenu) {
    let orderSum = chickenMenu * 10.35 + fishMenu * 12.4 + veggieMenu * 8.15;
    let dessert = 0.2 * orderSum;
    let totalPrice = orderSum + dessert + 2.5;
    console.log(totalPrice);
}

foodDelivery(2, 4, 3);