// what is typescript? 
// basically type define krte hn 


// ===================project setup===========

// npm install --global typescript@5.0.2 tsc version // download/install the tsc file 

// npm install -g typescript     // No 2 - installation command globally
// download or run command terminal par nh chalegi terminal k downArrow click or (command prompt ) me downlaod or run
//  command typescript ki whn kam krti ha 


// tsc main.ts && node main.js      // run this command in command prompt ( jo file name ho ushe name sy app or main )

// ================
//                REACT TYPE-Script   bh hoti ha 


// agr ap typescript me type nh btate tw 'any type' consider ki jati ha typescript ki trf sy jo prefer nh ki jati typescript ki traf sy 
// any type javscript k andr chlti ha jo varibale kxh bh utha k rakh sakte ho 
// to is lye function ho ya koe bh call krte waqt us ki type btate ho


// typescript const or let ko support krta ha 

// console.log('hello');



// var names = "Anas";            // name reserve keyword ha typescript ne bna kar rakha hoa ha 
// console.log(names);         



//    Notes
// `` = template literals



// var names = 'Anas';
// names = 'type'   // types name yhn reinitialize kia ha 
// console.log(names);       // anas type 


// let myName: string = 'Anas'
// console.log(`Hello my name is  ${myName} would you like you learn JS Today.`)   ;



// function getName() {
//     console.log('i am learning typescript');
    
// }
// getName()



//                 ||||| ||||||||||||||| WITH PROPER UI IN TYPESCRIPT |||||||||||||||||||||||||||||||||||||||||

const input1 = document.getElementById('num1')! as HTMLInputElement;  // yhn par jo input ayega to woh html k input ka element sy he ayega 
const input2 = document.getElementById('num2')! as HTMLInputElement ;
const button = document.getElementById('btn')!;

const add  = function (val1: number, val2: number) {  //type-script ha is lye input ki valu me type btai ha 
    return val1 + val2;
};

button.addEventListener('click', function () {
    const firstVal = input1.value;
    const secondVal = input2.value;
    console.log(add(+firstVal, + secondVal));

});



//            ||||

// Basic Types of TypeScript:-


// 1. String: string type likh kar define krte ho e.g 'apple'
// 2. Boolean: boolean 1 0 -87
// 3. Number: number   => true & false 

// array

// const arr:string[] = ["apple", "orange"];
// arr.push('pineapple')

// const arr2: number[] | string[] = [1, 2, 4]
// arr2.push(5)







// ----------------------------------------


// chat gpt sy kuch question quiz ki practice k lye extract kren
// & practical example bh le lo question

