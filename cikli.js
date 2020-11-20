function range() {
    let j = 0;
    let count = 0;

    for (let i = 1; i < 99; i++) {
        if (i  % 2 == 0) {
            j += i;
            count ++;
        }
    }
    return `Sum of even numbers: ${j}, quantity: ${count}`;
}

console.log(range());


 function cycle2(a) {
    
 for (let i = 2; i < a; i++) {
     if (a % i == 0) {
         // return i;
 console.log(`${a} ne prostoe cislo, deliteli ${i}`);
       
     } else {
         // return a;
 console.log(`${a} prostoe cislo`)
        
     }
 }
 }

 cycle2(12);


// function cycle3(n) {
//     
// }

// 


 function faktorial(num) {
 if (num == 0) {
   return 1;
 } else {
   let j = 1;

   for (let  i = 1; i <= num; i++) {
     j *= i;
   }
   return j ;
 }
 }

 console.log(faktorial(5));


 function addNums(num) {
     let rem;
     let sum = 0;
     for (let i = 0; i < num; ) {
         rem = num % 10;
         a = num / 10 - rem / 10;
         num = a;
         sum += rem;
     }
     return sum;
 }

 console.log(addNums(1));


// function cycle6() {
    
// }