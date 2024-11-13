function bonusScore(bonusNum){
   let bonus = 0.0;

   if(bonusNum <= 100) {
    bonus = 5;
   }else if(bonusNum > 100 && bonusNum <= 1000){
    bonus = bonusNum * 0.2;
   }else if(bonusNum > 1000){
    bonus = bonusNum * 0.1;
   }
   
   if(bonusNum % 2 == 0){
    bonus += 1;
   }else if(bonusNum % 10 == 5){
    bonus += 2;
   }

   console.log(bonus);
   console.log(bonusNum + bonus);
}

bonusScore(20);