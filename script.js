// function containsSpecialChars(str) {
//     const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//     return specialChars.test(str);
//   }

//   console.log(containsSpecialChars('hello!')); // 👉️ true
//   console.log(containsSpecialChars('abc')); // 👉️ false
//   console.log(containsSpecialChars('one two')); // 👉️ false

//   if (containsSpecialChars('hello!')) {
//     console.log('✅ string contains special characters');
//   } else {
//     console.log('⛔️ string does NOT contain special characters');
//   } 

const regixx = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
let y = regixx.test("AAysuh");
console.log(y);