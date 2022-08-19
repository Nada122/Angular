function objTOarray(){

const obj=
    {
        a:1,
        b:2
    };

console.log(obj);

console.log(Object.keys(obj));
let arr1=Object.keys(obj);
let arr2=Object.values(obj);

let u=arr1.pop();
arr2.push(u);
let o=arr2.shift();
arr1.unshift(o);
console.log(arr1);
console.log(arr2);
}
objTOarray();