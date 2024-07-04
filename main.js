var a=10;
var b=0;


var waiting = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    },2000);
});


waiting.then((data)=>{
    b=data;
    var total = a + b;
    console.log("Total = " +  total);
});

// setTimeout(()=>{
//     b=20;
//     console.log(b);
// },2000);
// var total = a + b;
// console.log("Total = " +  total);
//MERN developer = Mongo,Express,react,nodejs