let num=parseInt(prompt("please enter a nember. "))
if(num%5===0&&num%7===0){
    console.log("fizz buzz");
}
else if(num%5===0){
    console.log("fizz ");
}
else if(num%7===0){
    console.log("buzz ");
}
if(num%5!==0&&num%7!==0){
    console.log(num);
}