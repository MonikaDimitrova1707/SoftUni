function totalMeters(a) {
   let fullPrice = 7.61 * a;
   let discount = 0.18 * fullPrice;
   let totalCost = fullPrice - discount;
   console.log(`The final price is: ${totalCost} lv.`);
   console.log(`The discount is: ${discount}`);
}

totalMeters(550);