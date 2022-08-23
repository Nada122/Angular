let num=parseInt(prompt("please enter a number. "));
let fact=1;
for(let i=1;i<=num;i++){
    fact*=i;
}
console.log(fact);

//function


function fact(n){
    if (n==0){ return 1;}
     else {
      return n*fact(n-1);
  }
}
console.log(fact(5));