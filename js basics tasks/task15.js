let x=parseInt(prompt("Please enter num1"));
let y=parseInt(prompt("Please enter num2"));
let op=prompt("Please enter operation symbol")
let sum=x+y;
let sub=x-y;
let m=x*y;
let d=x/y;
switch(op){
    case '+': console.log("sum= "+ sum);
    break;
    case '-':console.log("subtract= "+sub);
    break;
    case '*':console.log('multiplication= '+m);
    break;
    case '/':console.log('division= '+d);
    break;
}
