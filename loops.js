//print the numbers 1 

// for(var a=1;a<=500;a++)
// {
//     console.log (a) ;
// }

/*
 

 */

// var a= 10;




// console.log (a++ + a++ - --a - a++ + 10 + ++a) ;

//print the numbers from 1 to 50;

// for(var a=1;a<=50;a++)
// {
//     console.log(a);
// }

//print the numbers from 50 to 1;


// for(var a=50;a>=1 ;a--)
// {
//     console.log(a);
// }

//print all the even number from 1 to 50;

// for(var a = 1;a<=50;a++)
// {
//     if(a%2==0)
//     {
//         console.log(a);
//     }

// }

//print all the even number from 1 to 50;

// for(var a = 1;a<=50;a++)
// {
//     if(a%2!=0)
//     {
//         console.log(a);
//     }

// }

//print all the numbers which are divisible by 7 from 1 to 350

// for(var a = 1;a<=350  ;a++)
// {
//     if(a%7==0)
//     {
//         console.log(a);
//     }
// }

//print all the number which are divisible by 3 ass well as 5 from 1 to 350

// for( var a= 1; a<=100; a++)
// {
//     if(a%5==0 && a%3==0)
//     {
//         console.log(a+" is divisible by 3 and 5 both");
//     }
//     else if(a%3==0)
//     {
//         console.log(a+" is divisible by 3"+a);
//     }
//     else if(a%5==0)
//     {
//         console.log(a+" is divisible by 5");
//     }

// }




// if(a%1==0 || a%44==0)
// {
//     console.log(a+" is prime number");
// }
// else{
//     console.log(a+" is not prime number");
// }

// for(var a=1; a<=100; a++)
// {
//     if(a%a==0 && a%a==a)
//     {
//         console.log(a+" is prime number");
//     }
//     else
//     {
//         console.log(a+" is not prime number");
//     }
// }

//check how many times 7 is divided from 1 to 100

// var count = 0;
// for( var a=1; a<=100 ;a++)
// {
//     if(a%7==0)
//     {
//        count++;
//     }

// }
// console.log(count);

//number is prime or not 

// var num = 71;
// var count = 0;
// for( a=1; a<=num; a++)
// {
//     if(num%a==0)
//     {
//         count++;
//     }

// }
// console.log(count==2? "prime number" : "not a prime");

//print 1 to 100 prime number is prime 


// for( a=1; a<=num; a++)
// {
//     if(num%a==0)
//     {
//         count++;
//     }

// }
// console.log(count==2? "prime number" : "not a prime");

//find the factorial of the number


// var num = 5;
// var fact =1;

// for(var a = 1;a<=num ; a++)// 1.2.3.4
// {
//     fact=fact*a;  //5*4*3*2*1=120
// }

// console.log(fact);

//find the summation of all entered number


// var n = 5;
// var sum = 0;

// for(var a = 1; a<=n; a++)   
// {
//     sum=sum+a; //5+4+3+2+1
// }
// console.log(sum);


//print upto prime numbers

// var n = 50;

// for (i = 1; i <= n; i++) {
//     var c = 0;

//     for (j = 1; j <= i; j++) {

//         if (n % j == 0) {
//             c++;
//         }

//     }

//     if (c == 2) {
//         console.log(i);
//     }
// }var num = 5;

// var num = 40320;
// var fact =1;

// for(var a = 1;a<=num ; a++)// 1.2.3.4
// {
//     fact=fact/a;  //5*4*3*2*1=120
// }

// console.log(fact);

//print prime number from 1  upto given number.


//print prime number value of given number

// var num = 7050;
// var a = 1;

// while(num>1)
// {
//     num=num/a;
//     a++
// }
// console.log(--a);

//while (end condition is true)
// {
//     statement;
// }

//print the digit of given number is reverse order.
// 1)Take remainder and print(last digit)
// 2)delete the last digit 
// 3)Repeat the process until that num is not zero

// var num = 4365;


// while(num>0)
// {
//     var rev=num%10;  // 1)Take remainder and print(last digit)

//     console.log(rev); // 2)delete the last digit 

//     num= parseInt(num/10); // 3)Repeat the process until that num is not zero

// }

//print the sum of all the digit in the given number

// var num = 4356;
// var sum = 0;

// while(num>0)
// {
//    var last =num%10;  //take out the last digit

//    sum=last+sum;         // add the last digit to the sum

//    num= parseInt(num/10);    //delete the last digit

// }
// console.log(sum);

//print reverse the given number

// var num = 123456789;

// var rev = 0

// while(num>0)
// {
//     var last = num%10;               //take out the last digit

//     rev = rev*10+last;               // add the last digit to the rev*10

//     num= parseInt(num/10);           //delete the last digit

// }
// console.log(rev);


//check the number is palindrome or not

// var num = 151;

// var temp =num; //151

// var rev = 0

// while(num>0)
// {
//     var last = num%10;               //take out the last digit

//     rev = rev*10+last;               // add the last digit to the rev*10

//     num= parseInt(num/10);           //delete the last digit


  

// }
// if(temp==rev)
// {
//        console.log("it's palildrome number");
// }
// else
// {
//         console.log("it's not palildrome number");
// }

//find given number is prime using while loop.

//find given number is armstrong number.

