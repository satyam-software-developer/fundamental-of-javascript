/** Return value of a function */

function squared(number){
return number * number;
console.log(number * number);// after return not reached in this line
}

const a = squared(5);
console.log(a);
squared(15);
squared(10);
squared(7);

