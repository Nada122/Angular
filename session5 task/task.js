//model C

function sumOfV(a){
    var num=0;
    for(let i=0;i<a.length;i++){
        if (a.charAt(i)=='a'||a.charAt(i)=='o'||a.charAt(i)=='i'||a.charAt(i)=='e'||a.charAt(i)=='u'
        ||a.charAt(i)=='A'||a.charAt(i)=='O'||a.charAt(i)=='I'||a.charAt(i)=='E'||a.charAt(i)=='U'){
               num+=1;
        }
    }
    return num;
}
console.log(sumOfV("HELLO world."))