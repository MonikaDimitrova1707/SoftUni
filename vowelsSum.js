function sumVowels(input) {
    let sum = 0;
  
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (char === 'a') {
        sum += 1;
      } else if (char === 'e') {
        sum += 2;
      } else if (char === 'i') {
        sum += 3;
      } else if (char === 'o') {
        sum += 4;
      } else if (char === 'u') {
        sum += 5;
      }
    }
  
    console.log(sum); 
  }
  
  sumVowels("hello");