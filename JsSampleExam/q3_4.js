let date_1 = new Date('20/11/2021');
let date_2 = new Date('25/11/2021');
let difference = date_1.getTime() - date_2.getTime();
let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
console.log(TotalDays );