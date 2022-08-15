let num1=parseInt(prompt("please enter first number."));
let num2=parseInt(prompt("please enter second number."));
let num3=parseInt(prompt("please enter third number."));
if(num1>num2&&num1>num3){
    console.log("largest is "+ num1);
}
else if(num2>num1&&num2>num3){
    console.log("largest is "+ num2);
}
else if(num3>num2&&num3>num1){
    console.log("largest is "+ num3);
}