/** Scope in JS */

// Global
// Function(Local)
// Block

// {
// var varNum = 10;
// let letnum = 20;
// const constNum = 30;
// console.log(varNum, letnum, constNum);
// }

// function print(){
//     var varLocal = 10;
//     let letLocal = 20;
//     const constLocal = 30;

//     console.log(varLocal, letLocal, constLocal);
//     console.log(varNum, letnum, constNum);
// }
// console.log(varNum, letnum, constNum);

// print();

// {
// var varNum = 10;
// let letnum = 20;
// const constNum = 30;
// console.log(varNum, letnum, constNum);
// }

// function print(){
//     var varLocal = 10;
//     let letLocal = 20;
//     const constLocal = 30;

//     console.log(varLocal, letLocal, constLocal);
//     console.log(varNum, letnum, constNum);
// }
// console.log(varNum, letnum, constNum);

// print();

var a = 10;
let b = 20;
const c = 30;

function print() {
  var a = 'ten';
  let b = 'twenty';
  
  console.log('***** Inside print Function*****');
  console.log(a, b, c);
  console.log('***** *****');

  function innerPrint(){
    var a = 'inner10';
    console.log('*Inside innerPrint Function*');
    console.log(a, b, c);
  }
  innerPrint();
}
console.log(a, b, c);
print();

