//////////////// Object-1 /////////////////

// const me = {
//   firstName: "Sultonqul",
//   lastName: "Nortoyloqov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// console.log(`firstName: ${me.firstName}`);
// console.log(`lastName: ${me.lastName}`);
// console.log(`age: ${me.age}`);
// console.log(`languages: ${me.languages.join(",")}`);
// console.log(`friends: ${me.friends.join(",")}`);

//////////////// Object-2 /////////////////

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// for (let i = a; i <= e; i++) {
//   let k = a ** a;
//   let l = b ** b;
//   let m = c ** c;
//   let n = d ** d;
//   let o = e ** e;
//   console.log(k, l, m, n, o);
// }

//////////////// Object-4 /////////////////

// let = person = {
//   firstName: "Sultonqul, Safarmurod , O’rol , Jahongir",
// };
// person.firstName = "Sultonqul 6, Safarmurod 9, O'rol 5";
// console.log(person);

//////////////// Object-5 /////////////////

// let fruits = {
//   "Ja'mi":
//     ("Apelsin", 10000) +
//     ("Olma", 12000) +
//     ("Mandarin", 8000) +
//     ("Banan", 20000),
// };
// console.log(fruits);

//////////////// Object-7 /////////////////

// let a = "Men Sultonqul Programmerning guruhlarida o’qiyman.";
// minword = a.slice(0, 4);
// maxword = a.slice(14, 28);
// console.log("MinWord: ", minword);
// console.log("MaxWord: ", maxword);

//////////////// Object-9 /////////////////

// const people = [
//   { name: "Sultonqul", age: 23 },
//   { name: "Erkin", age: 20 },
//   { name: "Temur", age: 21 },
// ];
// getNameMaxAge = {
//   name: "Sultonqul",
// };
// console.log(getNameMaxAge);

//////////////// Object-17 /////////////////

// const obj = {
//   firstName: "it",
//   Age: 20,
//   lastName: "mushuk",
//   age: 10,
//   Name: "sigir",
//   aGe: 200,
//   name: "tovuq",
//   agE: 2,
// };
// console.log(` ${obj.firstName}`, `: ${obj.Age}`);
// console.log(` ${obj.lastName}`, `: ${obj.age}`);
// console.log(` ${obj.Name}`, `: ${obj.aGe}`);
// console.log(` ${obj.name}`, `: ${obj.agE}`);

//////////////// Object-18 /////////////////

// const grades = [
//   { name: "Fizika", grade1: 4, kredit1: 6 },
//   { name: "Matematika", grade2: 5, kredit2: 6 },
//   { name: "Tarix", grade1: 4, kredit1: 4 },
//   { name: "Dasturlash", grade2: 5, kredit2: 8 },
//   { name: "Kibrxavfsizlik", grade1: 4, kredit1: 8 },
// ];
// let GPA = (4 * 6 + 5 * 6) / (4 + 8);
// console.log(GPA);

//////////////// Object-19 /////////////////

// const right_answers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const my_answers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// let rightCount = 0;
// let wrongCount = 0;

// for (let question in right_answers) {
//   if (right_answers[question] === my_answers[question]) {
//     rightCount++;
//   } else {
//     wrongCount++;
//   }
// }

// console.log(`To'g'ri javoblar soni: ${rightCount}`);
// console.log(`Noto'g'ri javoblar soni: ${wrongCount}`);

//////////////// Object-20 /////////////////

// let n = 3;
// const obj = { a: 2, b: 3, c: 4, d: 6 };
// let k = 2 + n;
// let l = 3 + n;
// let o = 4 + 3;
// let i = 6 + 3;
// console.log(k, l, o, i);

//////////////// Object-21 /////////////////

// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };
// console.log(product.company);
// console.log(product.company.founder);

//////////////// Object-24 /////////////////

// let procent = 70;
// let right = 69;
// let res = right >= procent;
// console.log(res);

//////////////// Object-25 /////////////////

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let passed = 0;
// let failed = 0;

// pupils.forEach((pupil) => {
//   if (pupil.protcent >= 70) {
//     passed++;
//   } else {
//     failed++;
//   }
// });

// console.log(`Imtihondan o'tganlar soni: ${passed}`);
// console.log(`Imtihondan o'ta olmaganlar soni: ${failed}`);
