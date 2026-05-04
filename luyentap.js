// // String
// console.log("Hello, Luyen Tap!");

// if (1 + 1 === 2) {
//   console.log("HELLO");
// }

// console.log(1234);

// const object = {
//   name: "Nguyễn Văn Lộc",
//   age: 20,
//   class: "TPM4",
// };
// // console.log(object);
// console.log(object.name);

// var r = [1, "Văn Lộc", true, 1.5, null, undefined];
// console.log(r);

// function sum(a, b) {
//   return a + b;
// }
// console.log("Tổng a + b = " + sum(5, 3));

// let a = 10;
// a = 20;
// console.log(a);

// function isEmty(value) {
//   if (value === 1) {
//     return true;
//   }
// }

// console.log(isEmty(1));

function getGrade(score) {
  if (score > 10 || score < 0) {
    return "điểm k hợp lệ";
  } else if (score >= 9) {
    return "A";
  } else if (score >= 8) {
    return "B";
  } else if (score >= 7) {
    return "C";
  } else if (score >= 6) {
    return "D";
  } else if (score < 6) {
    return "F";
  }
}

console.log(getGrade(4));
