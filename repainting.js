function calculateRepairCosts(nylon, paint, thinner, hours) {
   const nylonPrice = 1.50;
   const paintPrice = 14.50;
   const thinnerPrice = 5.00;
   const bagPrice = 0.40;

   let totalNylon = nylon + 2; 
   let totalPaint = paint * 1.1; 
   let nylonCost = totalNylon * nylonPrice;
   let paintCost = totalPaint * paintPrice;
   let thinnerCost = thinner * thinnerPrice;
   let materialsCost = nylonCost + paintCost + thinnerCost + bagPrice;

   let workersCost = (materialsCost * 0.30) * hours;

   let totalCost = materialsCost + workersCost;

   console.log(totalCost.toFixed(2));
}

calculateRepairCosts(10, 11, 4, 8);