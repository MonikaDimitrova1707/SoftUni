function schoolSupplies(penPackCount, markerPackCount, detergentLiters, discountPercent) {
    let suppliesPrice = penPackCount * 5.8 + markerPackCount * 7.2 + detergentLiters * 1.2;
    let discountDecimal = discountPercent /100;
    let discountSum = discountDecimal * suppliesPrice;
    let finalPrice = suppliesPrice - discountSum;
    console.log(finalPrice);
}

schoolSupplies(2, 3, 4, 25);