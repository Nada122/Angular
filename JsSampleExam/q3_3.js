function max( arr){
    let m = arr[0];
    let n=0;
    for(let i=1;i<arr.length;i++ ){
        if(arr[i]>m){
            m=arr[i];
            n=i;
        }

    }
    console.log(m);
    console.log(n);
}
let arr =[1,4,3,2,50,45];
max(arr);