/*

                        Arrays in Javascript

        Array is a variable which is uesd to store a multiple values.

        Array can be declare by using array literal and it is a  square brackets.

        Arrays in JavaScript is hetrogenious.

        Arrays in JavaScript is not fixed in size.

        array size can be access by length property.

        ACCESS

        Entire array can be access by using array name.

        array values can be accesed seperately by using index position.



*/

// var salaries = [10000,20000,30000,40000]; 

// console.log(salaries);

// var salarie = [10,"Hello",true,undefined,Nan];

// console.log(salarie);


// var salaries = [10,20,30,40,50,60,];

// console.log(salaries);

// console.log(salaries[0]);
// console.log(salaries[1]);

// let a = [10,20,30,40,50];  //size=5;

// //int [] a = new int[5];  // in java
// // a = {10,20,30,40,50}

// a [5]=60;                 //size=6;

// console.log(a);
//traversal of array values one by one

// var a = [10,20,30,40,50,60,70,80,90,100];

// for (var i = 0; i <=a.length-1; i++)
// {
//     console.log(a[i]);
// }

// By using for loop we can traverse the array value seperately.

//Given an array of ints, return true if 6 appears as either the first or last element in the array. 
// the array will be length 1 or more.

//1.
// function check6(num)
// {
//     if(num[0]==6 || num[num.length-1]==6)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// console.log(check6([3,5,7,6]));

//2.
// function check6(a)
// {
//    return a[0]==6 || a[a.length-1]==6;
// }
// console.log(check6([3,5,7,6]));

//
// let a = [10,20,30,40,50];

// for (let i = 0; i < array.length; i++) 
// {
        
// console.log(a[i]);
        
// }

//print all the even number present in an array


// function printEven(a)
// {
//         for (let i = 0; i < a.length; i++)
//         {
//             if(a[i]%2!=0)  
//             {  
//                 console.log(a[i]);
//             }
//         }ol

// }
// printEven([5,43,67,87,199,100]);

//print the sum of all the even and odd number present in an array.

//  function printsum(a) 
//  {
//          let evenSum=0;
//          let oddSum=0;

//          for (let i = 0; i < a.length; i++) 
//         {
//         if(a[i]%2==0)  
//         {  
//             evenSum=a[i]+evenSum;
//         }
//         else
//         {
//                 oddSum=a[i]+oddSum;
//         }

                
//         }
//         console.log(`The sum of all even numbers is ${evenSum}`);
//         console.log(`The sum of all odd numbers is ${oddSum}`);
//  }
//  printsum([6,42,67,88,199,100]);

// check the given number is present in an array, if present print true otherwise print false.

// function findVal(a, num)
// {
//         let res = false;
//       for (let i = 0; i< a.length; i++)
//       {
//             if(a[i]==num)
//             {
//                     res = true;
//                     break;
//             }
         
//       }  
//       return (res);

// }
// console.log(findVal([1,2,3,4,5] , 6));

// check the given number is present in an array, if present print true otherwise print false.
//if present in which index it is present else print -1;

// function findVal(a, num)
// {
//         let res = -1;
//       for (let i = 0; i< a.length; i++)
//       {
//             if(a[i]==num)
//             {
//                     res = i;
                   
//                     break;

//             }
         
//       }  
//       return (res);

// }
// console.log(findVal([1,2,3,4,5] , 4));


//create array in ascending order

//create array in descending order

//check the maxximum value in an array

// function checkMax(a)
// {
// let max=a[0];

//      for (let i = 0; i < a.length; i++) 
//      {
             
//         if (a[i] > max ) 
//         {
//                 max = a[i];
//         }
        
             
//      }  
//         console.log(max);
// }       

// checkMax([31,12,45,28,2,19,52]);

//find manimum number present in an array

// function checkMin(a)
// {
// let min=a[0];

//      for (let i = 0; i < a.length; i++) 
//      {
             
//         if (a[i] < min ) 
//         {
//                 min = a[i];
//         }
        
             
//      }  
//         console.log(min);
// }       

// checkMin([31,1,45,28,2,19,52]);


//Create array in ascending order.

// function sort(a)
// {

//      for (let i = 0; i < a.length; i++) 
//      {
             
//         for (let j = i+1; j < a.length; j++)
//         {
//               if(a[i] > a[j])      //main
//               {
//                       var temp = a[i];
//                       a[i] = a[j];
//                       a[j] = temp;
//               } 
                
//         }
        
             
//      }  
//         console.log(a);
//         console.log(`Min values is ${a[0]}`);
//         console.log(`Max values is ${a[a.length-1]}`);
// }       

// sort([3,1,4,2]);


//2.type *

// function sort(a)
// {

//      for (let i = 0; i < a.length; i++) 
//      {
             
//         for (let j = i+1; j < a.length; j++)
//         {
//               if(a[i] - a[j] > 0)   //main
//               {
//                       var temp = a[i];
//                       a[i] = a[j];
//                       a[j] = temp;
//               } 
                
//         }
        
             
//      }  
//         console.log(a);
// }       

// sort([3,1,4,2]);

//Create array in descending order

// function sort(a)
// {

//      for (let i = 0; i < a.length; i++) 
//      {
             
//         for (let j = i+1; j < a.length; j++)
//         {
//               if(a[i] < a[j])
//               {
//                       var temp = a[i];
//                       a[i] = a[j];
//                       a[j] = temp;
//               } 
                
//         }
        
             
//      }  
//         console.log(a);
// }       

// sort([3,1,4,2]);

//write a function to reverse an array.

// function reverse(a)
// {

//      for (let i = 0; i < a.length; i++) 
//      {
             
//         for (let j = i+1; j < a.length; j++)
//         {
              
//                       var temp = a[i];
//                       a[i] = a[j];
//                       a[j] = temp;
              
                
//         }
        
             
//      }  
//         console.log(a);
// }       

// reverse([1,2,6,3,5,4,6]);

//type 2*

// function reverse(a)
// {
// var j = a.length-1;
//      for (let i = 0; i < a.length; i++) 
//      {
             
        
              
//                       var temp = a[i];
//                       a[i] = a[j];
//                       a[j] = temp;
//                         j--;
              
                
             
//      }  
//         console.log(a);
// }       

// reverse([1,2,6,3,5,4,6]);

//ARRAY INBUILT METHODS

// var a = [1,2,3,4,5,6,7];

// a.length; //length is property

// a.pop()   //pop is method (function)

//how to iterate the array without length property and find length of array

// var a = [1,2,3,4,5,6,7,8,9,10];

// var length = 0;

// for (let i = 0; a[i]!=undefined; i++)
// {
//        // console.log(a[i]);
//        length++;
        
// }
// console.log(length);


// let a = [1,2,3,4,5];

// //console.log(a.pop());

// //a.length--;
// //a.length-a.length-1;


// console.log(a);

// //.pop() used to delete the last element.

//.push()

// let a = [1,2,3,4,5];

// console.log( a.push(6,7,8));  //add a new element to the end

// // a[a.length] = 6;

// console.log(a);

// /.shift()
// let a = [1,2,3,4,5];

//  a.shift();  //delete the first element from array


// console.log(a);

// let a = [10,20,30,40,50];

// // var x = a.pop();
// // a.pop();
// // a.push(x);

// console.log(a);

//.unshift()  //add the new element to the start

// let a = [10,20,30,40,50];

// a.unshift(0,1,2,3,4);

// console.log(a);

//.slice() //detete in between 

// let a = [10,20,30,40,50];

// console.log(a.slice(1,-3));

// console.log(a);

//.splice() //delete element from an array 

// let a = [10,20,30,40,50];

// a.splice(a.length-1,1);  //from , number of element

// console.log(a);

// let a = [10,20,40,50];

// //a.splice(5,0,60);  //from , delete number of element , add element

// //a.splice(2,1,30)     //from , delete number of element , add element  //replace the element

// console.log(a);

//left sift values algorithm

// function shift(a)
// {
//         var temp = a[0];
//         for (let i  = 0; i  <= a.length-2; i++) 
//         {
//                 a[i]=a[i+1];
                
//         }
//         a.length--;
//         console.log(a);
//         return temp;
// }
// console.log(shift ([1,2,3,4]));

//Right sift values algorithm (Assignment)

/*
pop() :- It will delete the last element

push() :- It will add the last element

shift() :- It will delete the first element

unshift() :- It will add the first element

slice(start,end) :- take a sub part of an array from specified index to end-1.

splice() :- we can use it to delete, add, replace the element in any perticular position.

includes() :-

indexOf() :- 


*/
// .includes(): for searching element its present or not in the array
// .index(): for searching index of element in the array
// let a = [1,2,3,4,5];


// console.log(a.includes(2,2));
// console.log(a.indexOf(2));


// default aurgument

// function add(a=0,b=0,c=0)
// {
//         var sum = a+b+c;
//         console.log(sum);
// }
// add(1,2);

// var a = [10,20,30];

//  console.log(a.includes(30));

// a.splice(2);

// console.log(a);

// var a = [10,20,30,40,50,30,60];

// console.log(a.indexOf(30));

// console.log(a.lastIndexOf(30));

// .concate() :- add 2 or more array

// var a = [10,20,30];
// var b = [40,50,30,60]
// var c = a.concat(b)

// console.log(c);

// .fill()

// var a = [10,20,30,40,50]

// a.fill(1,2,4);

// console.log(a);

// reverse();

// var a = [10,20,30,40,50]

// a.reverse();
// console.log(a);

// var a = [10,20,30,40,50]

// a.forEach( (x) => {console.log(x);})

// a.forEach( (value,index,a) => {console.log(x);})

// a.forEach( (x,y,z) => {console.log(x);})

// check the given number is present in an array, if present print true otherwise print false.

// function findVal(a, num)
// {
//         let res = false;
//       a.forEach( (val) => {
//               if(val==num) 
//               {
//                       res=true;

//               }
//       })
//       return (res);

// }
// console.log(findVal([1,2,3,4,5] , 6));


// function unshift (a,num)
// {
//         for (var i = a.length; i >= 0; i--)
//         {

//                a[i]=a[i-1];

//         }
//         a[0]=num;
//         console.log(a);
// }
// unshift([1,2,3,4,5] , [10,20,30])

// var a = [1,2,3,4];

// a.forEach((x,y,z)=> {
//         console.log(x);

// })

// var a = [1,2,3,4,5,6,7,8,9];

// var even = a.filter((val) =>{
//         return val%2==0;

// });

// var odd = a.filter((val)=>{
//         return val%2==1;
// })

// console.log(even);
// console.log(odd);

// Fat arrow function used for reduced the number of code.
// ()=> {

//         return val;

// }

// ()=> val

// var a = [1,2,3,4,5,6,7,8,9];

// var even = a.filter((val) =>val%2==0);

// var odd = a.filter((val)=>val%2==1);

// console.log(even);
// console.log(odd);

// a.some();
// a.every();

// var a = [3,6,9,12,50,18,21];

// console.log(a.some((val)=> val%3==0));

// console.log(a.every((val)=> val%3==0 && val%5==0));

// console.log(a.some((val)=> val==50));


// var a = [17,2,5,28,9,7,1,12];

// console.log(a.sort((a,b)=> a-b));

// destructuring of an array

// print the sum of first two element in an Array

// function sum ([])
// {
//         var sum = a[0]+a[1];
//         console.log(sum);
// }

// rest operator

// sum([1,2,3,4,5]);

// function sum([x,y,z,...a])
// {
//         console.log(x,y,z);
//         console.log(a);
// }
// sum([1,2,3,4,5,6,7,8,9]);

// spread operator

// var a = [1,2,3];

// var b = [4,5,6];

// var c = [...a,...b,7,8,9];

// console.log(c);

