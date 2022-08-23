// reverse string 

let str=prompt("enter a string");
let str1=null;
let size=str.length;
for(let i=size-1;i>=0;i--){
    str1+=str.charAt(i);
}
console.log(" "+str1);