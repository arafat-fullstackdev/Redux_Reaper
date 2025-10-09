// const counter={
//      count :0,
//      increment(){
//         this.count= this.count;
//         console.log(count)
//      },

// }

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

//? Pure function 
const add = (a,b)=> a+b;

// console.log(add(2,5));
// console.log(add(0,5));
// console.log(add(2,8));


//* impure function
var total =4;

const totalAmount = (amount) => (total = total + amount);

console.log(totalAmount(5))


const updateDate = () => {
   new Date();
} 

console.log(updateDate);