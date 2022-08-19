function calculator(){
let x=parseInt(prompt("Please enter num1"));
let y=parseInt(prompt("Please enter num2"));
let op=prompt("Please enter operation symbol")
let sum=x+y;
let sub=x-y;
let m=x*y;
let d=x/y;

console.log("sum= "+ sum);
console.log("subtract= "+sub);
console.log('multiplication= '+m);
console.log('division= '+d);


}
calculator();