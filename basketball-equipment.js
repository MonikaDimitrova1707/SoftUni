function basketballEquipment(annualTrainingFee) {
    let sneakersPrice = 0.6 * annualTrainingFee;
    let outfitPrice = 0.8 * sneakersPrice;
    let ballPrice = (1 / 4) * outfitPrice;
    let stuffPrice = (1 / 5) * ballPrice;
    let totalEquipmentSum = annualTrainingFee + sneakersPrice + outfitPrice + ballPrice + stuffPrice;
    console.log(totalEquipmentSum);

}

basketballEquipment(365);