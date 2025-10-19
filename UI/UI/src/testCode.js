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
// const add = (a,b)=> a+b;

// console.log(add(2,5));
// console.log(add(0,5));
// console.log(add(2,8));


//* impure function
// var total =4;

// const totalAmount = (amount) => (total = total + amount);

// console.log(totalAmount(5))


// const updateDate = () => {
//    new Date();
// } 

// console.log(updateDate);

//? Mutable vs Immutable

const employee = {name: 'LalMia',job: "Developer", city:"ChanPur"}

const employee2 ={
    ...employee,
    name: "KalaMia",
    job: "SQL",
};

// console.log(employee === employee2);
// console.log(employee);
// console.log(employee2);

//? function Currying


// const add = (a,b) => a + b;
 
 //* function curried 
 const addCurried = (a) => (b)=> a  + b;
 //console.log(addCurried(5)(5));

 // Lexical scope
 function testAdd(m){
    return function(n){
        return  m + n;
    }
 }

 //console.log(testAdd(6)(6));

 //const totalCost =(amount, discount) => amount - amount * discount;

 //console.log(totalCost(100, 0.4));


 //* function curried
 const totalPrice = (amount)=> (discount)=> amount - amount *  discount;
 //console.log(totalPrice(1000)(.3)); 

 function totalCost(amount){
    return function(discount){
        return amount -  amount * discount;
    }
 }

 //console.log(totalCost(100)(.5));

 const totalPrice2 = (discount)=> (amount)=> amount - amount *discount;

 const withDiscount = totalPrice2(0.3);

 console.log(withDiscount(200));
 console.log(withDiscount(1000));
 console.log(withDiscount(100));

 // multiple currying
 function add2(a){
     return function(b){
        return function(c){
            return function (d){
                return a + b+ c + d;
            }
        }
     }
 }

 console.log(add2(1)(1)(1)(1));