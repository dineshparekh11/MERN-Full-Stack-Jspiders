// check the given string is present in the string or not.

// function check(str , char)
// {   
//     let result = false;
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i]==char)
//         {
//             result = true;
//             break;
//         }     
//     }
//     console.log(result);
// }
// check("Niranjan" , "r" );
// check("Niranjan" , "x" );


// check the given string is palindrome or not.
// function check(str)
// {   
//     let newStr="";
//     for (let i = str.length-1; i >= 0 ; i--) 
//     {
//         newStr = newStr + str[i];
//     }
//     console.log(newStr==str ? "Palindrome word" : "not a palindrome");
// }
// check("madam");
// check("sir");

// check how many words are present in the given string

// function check(str)
// {
//     let word = 0;
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i] == " ")
//         {
//             word++;
//         }
//     }
//     console.log(`we have ${word} words in the given string`);
// }
// check("my name is");

// function check(str)
// {
//     str = str + " ";
//     let word = "";
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i]!= " ")
//         {
//             word = word + str[i];
//         }
//         else
//         {
//             console.log(word);
//             word="";
//         }
//     }
// }
// check("my name is mario");

// take the characters one by one
// check if it is a space , if not add that char to new string
// if that char is a space, so print the new string and change it to empty string.
// repete the process upto last char.



// function check(str , x)
// { 
//     let result = false;
//     var word = "";
//     for (let i = 0; i <= str.length-1; i++) 
//     {
//         for(let j=i;j<(i+x.length);j++)
//         {
//             word =  word + str[j];
//         }
//         if(word==x)
//         {
//             result=true;
//             break;
//         }
//         word="";
//     }
//     console.log(result);
// }
// check("Niranjan" , "iranjx" );




// function find(str , subStr)
// {
//     let word = "";
//     for(var i=0;i<str.length;i++)
//     {
//         for(var j = i ; j< i+subStr.length;j++)
//         {
//             word = word + str[j];
//         }
//         if(word==subStr)
//         {
//             return "given word is present";
//         }
//         word = "";
//     }
//     return "given word is not present";
// }
// console.log(find("my name is mario" , "mam"));



// find the largest word in the given string.

// forming a words seperatly + finding max value in array

// function largest(str)
// {
//     str = str+" ";
//     let word = "";
//     let max = "";
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]  != " ")
//         {
//             word = word + str[i];
//         }
//         else
//         {
//             if(word.length > max.length)
//             {
//                 max = word;
//             }
//             word = "";
//         }
//     }
//     console.log(max);
// }
// largest("my name is mario");
// largest("mario is my name");

// function smallest(str)
// {
//     let min = str;
//     str = str+" ";
//     let word = "";
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]  != " ")
//         {
//             word = word + str[i];
//         }
//         else
//         {
//             if(word.length <= min.length)   
//             {
//                 min = word;
//             }
//             word = "";
//         }
//     }
//     console.log(min);
// }
// smallest("my name is mario");


// find the largest and smallest character in a string.


//STRING INBUILT METHODS

// let str = "string value";

// // console.log(str[4]);

// // console.log(str.charAt(undefined));   

// console.log(str.charCodeAt(3));


// var str1="A";

// var str2="xy";

// // console.log(str1.charCodeAt(0) > str2.charCodeAt(0));

// console.log(str1.charCodeAt(0));

// str = "H";

// if(str.charCodeAt(0)>=65 && str.charCodeAt(0)<=90)
// {
//     console.log("Its a upper case string");
// }
// else
// {
//     console.log("lowercase");
// }

// var str = "my name is dinesh";

// console.log( str.codePointAt(0));

// console.log(str.concat(" hello everyone"));

// console.log(str.endsWith("h"));
// console.log(str.startsWith("a"));
// console.log(str.includes("cre"));

// console.log(str.indexOf("it"));

// function indexOf(str, subStr)
//  {
//      let word = "";
//      for(var i = 0; i < str.length;i++)
//      {
//          for(var j = i; j < i+subStr.length; j++)
//          {
//             word = word + str [j];
//          }
//          if(word==subStr)
//          {
//              return i;
//          }
//          word = "";

//      }
//      return -1;


//  }

//  indexOf("my name is dinesh" , "it");

// var str = "my name is dinesh";

// console.log(str.indexOf("m"));
// console.log(str.lastIndexOf("m"));

// var str = "my name is dinesh";

// console.log(str.split("m"));

// function split(str , splitChar) 
// {
//     str = str + splitChar;
//    let a = [];
//    let word = "";

//    for(let i = 0; i < str.length; i++)
//    {
//        if(str[i] != splitChar)
//        {
//             word = word + str[i];
//        }
//        else
//        {
//             a.push(word);
//             word="";
//        }
//    }
//    console.log(a);
// }
// split ("my name is mario" , "m")

//.replace() assignment > write logic for it

// var str = "my name is mario";

// console.log(str.replace("my" ,"My"));

// console.log(str);

// str = str.toUpperCase();

// console.log(str.toLowerCase());

// console.log(str.trim());


// console.log(str);






































































































































































