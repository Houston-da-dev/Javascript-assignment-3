const prompt = require('prompt-sync')();

// let yes = "";

// x = inputnumber();
// console.log("Thank you!");
// y = inputnumber();
// console.log("Thank You!");

// yes = question();

// if(yes == "Y"){
//     z = inputnumber();
//     console.log("Thank You!");
// }

// console.log(lesser(x,y,z = Infinity))

// function question(){
//     for(yes == ""; yes != "Y" && yes != "N"; yes){
//         yes = prompt("Do you want to add a third number Y/N?")
//         if(yes == "Y" || yes == "N"){
//             console.log("Okay")
//         }
//         else{
//             console.log("Try Again")
//         }
//     }
//     return yes
// }

// function lesser(x,y,z){
//     if(x>y){
//         if(y>z){
//             return z;
//         }
//         else{
//             return y;
//         }
//     }
//     else if(x>z){
//         return z;
//     }
//     else{
//         return x;
//     }
// }




// z = inputnumber();
// y = isEven(z);
// console.log(z + " is " + y)

// function isEven(x){
//     while (x !== 0 && x !== 1) {
//         x -= 2;
//     }
//     if (x === 0) {
//         return "Even";
//     } 
//     else {
//         return "Odd";
//     }
// }



n = inputnumber();

y = nthterm(n);
console.log(y);

function nthterm(n){
    var x = 2;
    for(counter = 1; counter < n; counter ++){
        x = x + counter * 4;
    }
    return x
}

// function nthterm(n){
//     var x = 1;
//     for(counter = 1; counter <= n; counter ++){
//             x = x * counter;
//     }
//     return x
// }

// function nthterm(n){
//     var x = 0;
//     var b = 1;
//     var hold = 1;
//     for(counter = 1; counter <= n; counter ++){
//         hold = x + b;
//         x = b;
//         b = hold;
//     }
//     return x
// }

// num1 = inputnumber();
// console.log("Thank you!");
// num2 = inputnumber();
// console.log("Thank you!");
// cf = commonfactor(num1,num2);
// console.log(cf);
// cm = lcm(num1,num2);
// console.log(cm)

// function lcm(a, b) {
//     let big = Math.max(a, b);
//     let small = Math.min(a, b);
//     for (x = big; ; x += big) {
//         if (x % small == 0)
//             return x;
//     }
// }

// function commonfactor(a, b) {
//     let smaller = Math.min(a, b);
//     let hcf = 1;

//     for (let x = 1; x <= smaller; x++) {
//         if (a % x === 0 && b % x === 0) {
//             hcf = x;
//         }
//     }
//     return hcf;
// }






// for(a = 0; a != 5; a){
//     a = select();
//     if(a == 1){
//         add();
//     }
//     else if(a == 2){
//         sub();
//     }
//     else if(a == 3){
//         mult();
//     }
//     else if(a == 4){
//         divid();
//     }
//     else if(a == 5){
//         console.log("Goodbye!")
//     }
// }

// function add(){
//     num1 = inputnumber();
//     num2 = inputnumber();
//     console.log(`${num1 + num2}`);
// }

// function sub(){
//     num1 = inputnumber();
//     num2 = inputnumber();
//     console.log(`${num1 - num2}`);
// }

// function mult(){
//     num1 = inputnumber();
//     num2 = inputnumber();
//     console.log(`${num1 * num2}`);
// }

// function divid(){
//     num1 = inputnumber();
//     num2 = inputnumber();
//     console.log(`${num1 / num2}`);
// }

function select(){
    for(a = 0; a == NaN || a > 5 || a <= 0; a){
        console.log("Please Select an Option - \n Press 1 to Add \n Press 2 to Subtract \n Press 3 to Multiply \n Press 4 to Divid\n Press 5 to Quit");
        a = Number(prompt());
        if(a > 5 || Number.isNaN(a) || a <= 0){
            console.log("Invailed input. Please try again.")
        }
    }
    return a
}



function inputnumber(){
    let input = Number(prompt("Enter a number"));
    let num = input
    while(isNaN(num)){
        console.log(`invalid number`)
        input = Number(prompt("Enter a number"));
        num = input;
    }
    return num;
}





// a = inputnumber2();
// y = numbercheck(a);
// if(y == "true"){
//     b = inputnumber2();
//     x = numbercheck(b);
// }
// else{var x = "false"}
// if(x == "true"){
//     c = inputnumber2();
//     z = numbercheck(c);
// }
// else{var z = "false"}
// if(z == "true"){
//     d = inputnumber2();
//     w = numbercheck(d);
// }
// else{w == "false"}
// if(w == "true"){
//     print(a,b,c,d)
// }




// function numbercheck(x){
//     if(isNaN(x)){
//         console.log("ERROR")
//         return "false";
//     }
//     else{
//         return "true";
//     }
// }

// function print(a,d,b,c){
//     let sm = Math.min(a,d);
//     let bg = Math.max(a,d);
//     for(sm; sm <= bg; sm ++){
//         let small = Math.min(b, c);
//         let big = Math.max(b, c);
//         for(small; small <= big; small ++){
//             console.log(sm + " * " + small + " = " + small * sm);
//         }
//     }
// }



// function inputnumber2(){
//     let input = Number(prompt("Enter a number"));
//     let num = Number(input);
//     return num;
// }