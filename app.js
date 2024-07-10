// console.log('hello');
// var names = 'Anas';
// names = 'type'   // types name yhn reinitialize kia ha 
// console.log(names);       // anas type 
// function getName() {
//     console.log('i am learning typescript');
// }
// getName()
// npm install -g typescript     // installation command globally
// download or run command terminal par nh chalegi terminal k downArrow click or (command prompt ) me downlaod or run command typescript ki whn kam krti ha 
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// const input1 = document.getElementById('num1')! as HTMLInputElement;
// const input2 = document.getElementById('num2')! as HTMLInputElement ;
// const button = document.getElementById('btn')!;
// const add  = function (val1: number, val2: number) {  //type-script ha is lye input ki valu me type btai ha 
//     return val1 + val2;
// };
// button.addEventListener('click', function () {
//     const firstVal = input1.value;
//     const secondVal = input2.value;
//     console.log(add(+firstVal, + secondVal));
// });
// typescript const or let ko support krta ha 
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.getElementById('btn');
var add = function (val1, val2) {
    return val1 + val2;
};
button.addEventListener('click', function () {
    var firstVal = parseFloat(input1.value); // Use parseFloat to convert string to number
    var secondVal = parseFloat(input2.value); // Use parseFloat to convert string to number
    console.log(add(firstVal, secondVal));
});
