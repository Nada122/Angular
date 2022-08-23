function toArray (obj) {
    let a = [];
    a = Object.entries(obj);
    return a;
  };
  
  
  console.log(toArray({ a: 1, b: 2 }));