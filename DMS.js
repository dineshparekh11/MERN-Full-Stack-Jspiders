//Check the person can vote or not, he can vote if his age is 18 or more. if he is able to vote print true or else print false.

// var age = 20;

// if(age >= 18)
// {
//     console.log("He / She can vote");
// }

// else
// {
//     console.log("He / She can not vote");
// }

//Check the person can vote or not, he can vote if his age is 18 and 80. if he is able to vote print true or else print false.

// var age = 90;

// if(age >= 18 && age <= 80)
// {
//     console.log("He / She can vote");
// }

// else
// {
//     console.log("He / She cannot vote");
// }

//print true if the number is divisible by 3 or 5, if not print false

// Algo: input - num
//      output - true                                     false
//             when num is divisible by 3
//       if  <           or                              else 
//             when num is divisible by 5

// var num = 22;

// if( num%3==0 || num%5==0)
// {
//     console.log(true)
// }
// else
// {
//     console.log(false)
// }

//print true if the number is divisible by 3 and 5 both, if not print false

// var num = 22;

// if( num%3==0 && num%5==0)
// {
//     console.log(true)
// }
// else
// {
//     console.log(false)
// }

//print true if the given number is a 1 or 2 more than a multiple of 20. 

//algo: 20*1=20 20*2=40........
//    input 
//    output - true                       false
// if <         1 more multiple of 20       else
//        or    2 more multiple of 20      
// var num = 62;

// if( num%20==1 || num%20==2)
// { 
//     console.log(true)
// }
// else
// {
//     console.log(false)
// }

//print true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false.

// algo:-      true                            false
//         num is less than multiple of 20
//                 or
//         num is two or more less multiple of 20          

// var num = 40;

// if( num%20==19 || num%20==18)    //20/38
// {
//     console.log(true)
// }
// else
// {
//     console.log(false)
// }



//Given 2 variables a and b print their sum. however sum in the range 10..19 inclusive, are forbidden so in that case just print 20.

//algo:- input :- Var a,b               output
        // output: sum                     20  if sum in 
        //                                 when sum is in range of  [10_____19]
       //dynamic logic

        // var a = 50;
        // var b = 10;
        // var sum=a+b;

        // if(sum>=10 && sum<=19)
        // {
        //     console.log(20)
        // }
        // else
        // {
        //     console.log(sum)
        // }


//Given a non-negative number "num", return true if num is within 2 of a multiple of 10.

//algo:- input :- num a                    output
        // output: num                     2  if num is within multiple of 10 
        //                                 

        //  var num = 2003;
        //  var rem = num%10;

        // if(rem<=2 || rem>=8)
        // {
        //     console.log(true)
        // }
        // else
        // {
        //     console.log(false)
        // }

//We'll say a number is special if it is a multiple of 11 or if it is one more than
// a multiple of 11. 
//print true if the given non-negative number is special. Use the % "mod" operator -- 

//Algo: Input:- Var num =

//      Output:- True               false 

//      if num is multiple of 11 
//or num if it is one more than a multiple of 11

        //  var num = 24;

        //  rem = num%11;
         

        // if(rem==0 || rem==1)
        // {
        //     console.log(true)
        // }
        // else
        // {
        //     console.log(false)
        // }

//Q1.When squirrels get together for a party, they like to have 
//cigars. A squirrel party is successful when the number of cigars is
// between 40 and 60, inclusive. Unless it is the weekend, in which 
//case there is no upper bound on the number of cigars. Return true 
//if the party with the given values is successful, or false otherwise.

//Algo: Input:- var c = 45;
              //var isWeekend = true;

//      Output:- True               false 

//      if c is between 40 and 60
//or party is running on weekend 
//cigar more than 40 day

// var c = 55;
// var isWeekend = true;

// if(c>=40 && c<=60)
// {
//     console.log(true);
// }
// else if(isWeekend==true && c>=40)
// {
//     console.log(true);
// }
// else
// {
//     console.log(true);
// }

// You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, 
//and "date" is the stylishness of your date's clothes. 

//The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. 

//If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less,
// then the result is 0 (no). 

//Otherwise the result is 1 (maybe).


// dateFashion(5, 10) → 2
// dateFashion(5, 2) → 0
// dateFashion(5, 5) → 1

//Algo: Input:- var you = 5;
//              var date = 5;
//              
              

//      Output:- True               false 

//      0 (No)                             2(yes)                                                  1(may be)

// if boy has stylish <= 2            if boy has stylish >= 8                                  else
// or if girl has stylish <= 2        or if girl has stylish >= 8



//      var boy = 8;
//      var girl = 6;
              

//         if(boy<=2 || girl<=2  )
//         {
//            console.log(0)    
//         }
//         else if(boy>=8 || girl>=8)
//         {
//         console.log(2)
//         }
//         else
//         {
//         console.log(1)
//         }

/* Q. The squirrels in Palo alto spend most of the day playing . 
in particular, they play if the temperature is beetween 60 and 90 (inclisive).
unless it is summer, then the upper limit is 100 instead of 90. 
given a number tem and a boolean isSummer, print true if the squirrels paly and false otherwise.

Algo: input - var temp, var isSummer

        output - true (play)                                                           false (don't play)
        if the temperature is beetween 60 and 90 (normal day)

        or 

        day summer 
        and 
       temp 60-100
        

*/

// var temp=180;
// var isSummer=true;

// if( temp>=60 && temp<=90 )     //regular day temp is beteen 60 to 90
// {
//         console.log(true)
// }
// else if(isSummer==true && temp>=60 && temp<=100) // summer day temp is beteen 60-100
// {
//         console.log(ture)
// }
// else
// {
//         console.log(false)
// }

/*

Q.You  are drivinng a littel too fast , and a police officer stop you write the code to compute the result,  encoded as an int value : 0=no
ticket , 1=small ticket , 2=big ticket. 

if speed is 60 or less , the result is 0. if speed between 61 to 80 inclusive , the result is 1. 
if spedd is 81 or more, the result is 2. 

useless it is your birthday --on that day, speed can be 5 higher in all cases.

algo: input - speed =80 , isBirthday= true;
     output:   0                                     1                                      3 
        if speed <=60                         if speed 61 to 80                      if speed >=81

      or  isBirthday and speed <=65      or  isBirthday and speed 66-85           or isBirthday and speed >=86


*/

        // var speed = 80;
        // var isBirthday = true;

        // if(speed<=60 || (isBirthday==true && speed<=65))
        // {
        //         console.log(0);
        // }
        // else if((speed>=61 && speed<=80) || (isBirthday==true && speed>=66 && speed<=85))
        // {
        //         console.log(1);
        // }
        // else
        // {
        //         console.log(2);
        // }

/*
Q Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation,

print a string of the form "7:00" indicating when the alarm clock should ring. 

Weekdays, the alarm should be "7:00" 
and on the weekend it should be "10:00". 

Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

Algo: input - isVacation = 7:00; day= 0-6
output:         7:00                         10:00                         off the
               weekend 1-5               day is sun 0
                                        or day is sat 6                     else
                                        or if isVacation and day 1-5

                


*/


// var isVacation = true;
// var day = 6;



// if((day>=1 && day<=5) && isVacation==false)
// {
//         console.log("7:00");
// }
// else if((isVacation==true && (day>=1 && day<=5) || (isVacation==false && (day==0 || day==6))))
// {
//         console.log("10:00");
// }
// else{
//         console.log(off);
// }                                                                                                                               


// The number 6 is a truly great number. Given two int values, a and b, 
//print true if either one is 6. Or if their sum or difference is 6.
//Note: the function Math.abs(num) computes the absolute value of a number.

// algo : input- a,b
//         output- true                       false


        // var sum  = a+b;
        // var diff = a-b;
        // var diff1= b-a;
        
        // if(a==6 || b==6 || sum==6 || diff==6 || diff1==6)
        // {
        //   console.log(true);
        // }
        // else
        // {
        //   console.log(false);
        // }

//Swap 2 number with 3rd variable

// var a = 10;
// var b = 20;

// var temp = a;

// a=b;
// b=temp;

// console.log(a);
// console.log(b);

//Swap 2 number without 3rd variable (using + -)

//  var a = 10;
//  var b = 20;

//  a = a+b;
//  b= a-b;
//  a=a-b;

//  console.log(a);
// console.log(b);

//Swap 2 number without 3rd variable (using * /)

// var a = 50;
// var b = 60;

// a = a*b;
// b= a/b;
// a=a/b;

// console.log(a);
// console.log(b);


// Given a number n, return true if n is in the range 1..10, inclusive. 
// Unless outsideMode is true, in which case return true if the number is less or
//  equal to 1, or greater or equal to 10.

// algo: input: var n, var outsideMode=t/f

//         output: true                                                false
//         outsideMode= false or n- 1 to 10 
//         or outsideMode=true < n<=1                                    else
//                               or n>=10



// Return true if the given non-negative number is a multiple of 3 or 5,
//  but not both. Use the % "mod" operator

// if((n % 3 == 0 && n % 5 != 0) ||( n % 3 != 0 && n % 5 == 0))
// {
//     console.log (true);
// }
// else
// {
//    console.log(false);
// }


// Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky.
//  So if either value is a teen, just return 19.








// Check the given year is leap or not

// var year=2012;
// if(year % 100 === 0) || (year % 400 === 0) && (year % 4 === 0);
// {
//         console.log("Year is leap");
// }
// else
// {
//         console.log("Year is not leap");
// }

//--------------------------------------------------------------------------------------------------------------------------------------

// Condition operator:

// syntax

// condition ? statements1 : statements2;

// var a=14;
// var b=21;

// ((a>=13 && a<=19) || (b>=13 && b<=19)) ? console.log(19) : console.log(a+b); 

//maxMod5

// Given two int values, return whichever value is larger. 
//However if the two values have the same remainder when divided by 5, then the return the smaller value.
//Hovever in all cases if the two values are the same, return 0.

//algo var a, var b 
//output : larger                              smaller                             zero

// var a = 7;
// var b = 5;

// if(a==b)                          //first check are the values same
// {
//         console.log(0);
// }
// else if(a%5 == b%5)              //check if the remainder are same
// {
//        a<b ? a: b;               //if a is less than b ? a is small : b is small
// }

// else                             //if not directly return larger value
// {
//         a>b ? a : b;             //if a is larger than b ? a is large (ELSE) b is large 
// // }


// We want to make a row of bricks that is goal inches long. 
// We have a number of small bricks (1 inch each) and big bricks (5 inches each). 
// Return true if it is possible to make the goal by choosing from the given bricks. 
// This is a little harder than it looks and can be done without any loops.

// algo. input = small, big, goal 
//       output = true                                           false
//         using small no + big no.
//         if we can build goal then                              else


// var small = 3;
// var big = 2;
// var goal = 13;

// if((small*1) + (big*5) >= goal))
// {
//         console.log(true);
// }
// else 
// {
//         console.log(false);
// }

//Switch Case:


// check a given day is weekday or a weekend;

//var day = "wednessday";

//Switch Case will executed the statments where the case is true, end if no casses are true it will excute default's statement

// syntax
// Switch(variable)
// {
//     case 1 : start;
//             break;
//     case 2: start;
//             break;
//     case 3: start;
//             break;
//             .
//             . 
//             .
//             .
//             .
//     case n: start;
//             break;
//         default : start;
// }

// We are having a party with amounts of tea and candy. 
//Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. 
//A party is good (1) if both tea and candy are at least 5. However, 
// if either tea or candy is at least double the amount of the other one, the party is great (2). 
// However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

var tea=8;
var candy=4;

if(tea>=5 || candy>=5)
{
       console.log (1);
}
else if(tea==candy*2 || tea/2==candy || candy==tea*2 || candy/2==tea)
{
        console.log(2);
}
else if(tea<5 || candy<5)
{
        console.log(0);
}