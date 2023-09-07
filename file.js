//String Problem Solving


//Problem 1:
//Make a function that accepts one string and return it reversed.

function string1() {    
    var str = prompt("Please Enter Any String To Reverse It");
    console.log([...str].reverse().join(""));
}

string1();



//=====================================================================


// Problem 2:
// Function that accepts two string and check if they are equal or not (not
// case sensitive)
// Example: 1. (Eraa, eraa) => true
// 2. (Mohamed, Moamen) => false







//=====================================================================


// Problem 3:
// Function that takes a string and check if this string is all uppercase or not.


function string3() {
    var s = prompt("Please Enter Any String To Check If This String Is All uppercase or not");
    if(s == s.toUpperCase()) {
        console.log("Yes");
    }
     else {
         console.log("NO");
    }
}

string3();


//=====================================================================


// Problem 4:
// Function that takes a string and two positions as numbers and return the 
// part of the string between these two positions. (Make two different 
// solutions).
// Example: “Moamen” “1” “4” => “oame”


function string4() {
    var st = prompt("Please Enter Any String");
    var n1 = +prompt("Please Enter The Start Number");
    var n2 = +prompt("Please Enter The End Number");        
    console.log(st);
    console.log(st.slice(n1,n2+1));
}

string4();


//=====================================================================


// Problem 5:
// Make a function that accepts 3 names as a parameter first one is 
// firstName second is middleName and third lastName.
// And then the function should return one string containing all three 
// names separated by a space without using (+) operator.
// Problem 6:
// Function that accepts a string and then checks if it is palindrome or not.
// (Search for what palindrome string is if you don’t know


function string5() {
    var s1 = prompt("Please Enter Frist String");
    var s2 = prompt("Please Enter Second String");
    var s3 = prompt("Please Enter Third String");
    console.log(s1 + " ".concat(...s2," ").concat(...s3));

}

string5();


//=====================================================================


// Problem 6:
// Function that accepts a string and then checks if it is palindrome or not.
// (Search for what palindrome string is if you don’t know).


function string6() {
    var stra = prompt("Please Enter Any String");
        if(stra.charAt(0) == stra.charAt(stra.length - 1)) {
            console.log("True");
        }
        else {
            console.log("False");
        }
    console.log(stra);
}

string6();


//=====================================================================


// Problem 7:
// Function that accepts a string and remove the extra spaces at the start 
// and the end of this string

function string7(x) {
    var strr = prompt("PLease Enter Any String")
    console.log(strr.trim());
}

string7(" Anas");


//=====================================================================

// Problem 8:
// In specific location all URLs start with (ww.) and ends with (.eraa).
// Make a function that accepts a URL and check if it’s from this location or 
// not.
// Example: 1. (ww.moamen.eraa) => true
// 2. (w3w.sherif.err) => false


function string8() {
    var url = prompt("PLease Enter Any String AS URl");
    if(url.startsWith('ww') && url.endsWith('.eraa')) {
        console.log("This Is A URL");
    }

    else {
        console.log("This Is Not Url");
    }
}

string8();


//=====================================================================


// Problem 9:
// Function that takes a string and remove the ‘o’ letter from it (Capital and 
// small)
// Example: 1. “Eraoa” => “Eraa”
// 2. “oMOamen” => Mamen


function string9() {
    var x = prompt("PLease Enter Any String AS A Word To Remove The 'o' From It");
    console.log(x.replace('o' , ""));

}

string9();


//=====================================================================


// Problem 10:
// Function that accepts three strings. Check if the second and the third 
// strings are a substring of the first one.
// (Substring means that the string is a part of another string).
// Example: 1. “SoWhatYesOhh”, “What”, “Ohh” => true
// 2. “SoWhatYesOhh”, “So”, “Ah” => false 
//  (“Ah” not in the string)

function string10(s1 , s2 , s3) {
    
}

var res = string10("SoWhatYesOhh", "What" , "Ohh");
if (res != -1){
    console.log("Yes");
}

else {
    console.log("NOO");
}


//=====================================================================


//Array Problem Solvig

// Problem 1:
// Function that takes a number and return the left most digit of it.
// Example 1:
// Input: 432
// Output: 4
// Example 2:
// Input: 12
// Output: 1

function digit() {
    let num = prompt("Please Enter The Number");
    console.log(num.charAt(0));
}

digit();


//=====================================================================


// Problem 2:
// Create a program that takes an array count how many positive numbers,
// negative numbers, even numbers and odd numbers (By same order as
// written) (0 is not counted as positive or negative but it’s counted as an
// even number).


function test() {
    let positive = 0;
    let negative = 0;
    let even = 0;
    let odd = 0;
    let size = +prompt("Please Enter The Size Of Array");
    const arr = [size];
    for (let i = 0 ; i < size ; i++) {
        var index = +prompt("Please Enter The Index Of " + i);
        if(index > 0) {
            positive = positive + 1;
        }

        if(index < 0) {
            negative = negative + 1;
        }

        if(index % 2 == 0) {
            even = even + 1;
        }

        if(index % 2 != 0) {
            odd = odd + 1;
        }
        console.log(index);
    }

    console.log("The Number Of Positive Numbers Is : " + positive);
    console.log("The Number Of Negative Numbers Is : " + negative);
    console.log("The Number Of Even Numbers Is : " + even);
    console.log("The Number Of Odd Numbers Is : " + odd);
}


test();


//=====================================================================


// Problem 3:
// Create a function that take array as an input this array may contains
// numbers or strings return the array contains only integers.
// Example 1:
// Input: [1, NaN, 2, ‘a’, ‘aba’]
// Output: [1, 2]
// Example 2:
// Input: [‘Ahmed’, 12, ‘Mohamed’, 34, ‘Mahmoud’, 12, 54]
// Output: [12, 34, 12, 54]

function fun() {
    let s = +prompt("Please Enter The Size Of This Array");
    let arr1 = [s];
    let arr2 = [];
    for(let i = 0 ; i < s ; i++) {
        var y = prompt("Please Enter The Index Of " + i);
        if(Number(y)) {
            console.log(y);
            arr2.push(y);
    }
}
    console.log(arr2);
}

fun();


//=====================================================================


//Problem 5:
// Create a function that takes an array of arrays with numbers. Return a
// new single array with the largest numbers of each.
// Example 1:
// Input: [[1, 2, 3, 4], [45, 73, 12], [13, 13, 10]]
// Output: [4, 73, 13]

function largest(arr) {
   const temp = [];
   for (let i = 0; i < arr.length; i++) {
    let large = arr[i][0];
    for (let j = 1 ; j < arr[i].length; j++) {
      if (arr[i][j] > large) {
            large = arr[i][j];
         }
    }
      temp[i] = large;
}
  
    return temp;
}
console.log(largest([[1,2,3,4] , [45,73,12] , [13,13,10]]));


//=====================================================================


// Problem 6:
// Given a string S. Print the origin string if it’s not too long otherwise, print
// special abbreviation.
// Note: The string is called too long, if its length is strictly more than 10
// characters. If the string is too long then you have to print the string in the
// following manner:
// • Print the first character in the string.
// • Print number of characters between the first and the last characters
// • Print the last character in the string
// Example 1:
// Input: word
// Output: word
// Example 2:
// Input: internationalization
// Output: i18n
// Example 3:
// Input: pneumonoultramicroscopicsilicovolcanoconiosis
// Output: p43s

function Count() {
    let txt = prompt("Please Enter Any String");
    if(txt.length <= 10) {
        console.log(txt);
    }
    else if(txt.length > 10) {
        console.log(txt.charAt(0) + "" + (txt.length - 2) + txt.charAt(txt.length - 1));
    }
}

Count();


//=====================================================================


// Problem 7:
// Function takes a string consisting of 4 characters determine if S consists of 
// exactly two kinds of characters. Check if the string has exactly two 
// different characters in which each of them appear two times in the string.
// Example 1:
// Input: ASSA
// Output: True
// Example 2:
// Input: STTO
// Output: False
// Example 3:
// Input: FFEE
// Output: True


function checking() {
    let t = prompt("Please Enter The Word Please");
    if((t.charAt(0) == t.charAt(3)) && (t.charAt(1) == t.charAt(2))) {
        return true;
    }
    else if((t.charAt(0) == t.charAt(1)) && (t.charAt(2) == t.charAt(3))) {
        return true;
    }
    else if((t.charAt(0) == t.charAt(2)) && (t.charAt(1) == t.charAt(3))) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checking());


//============================================================================


// Problem 9:
// Create a function that takes an array and a character that returns the first
// and the last index of this character.
// Example 1:
// Input: [‘h’, ‘e’, ‘l’, ‘l’, ‘o’] ‘I’
// Output: [2, 3]
// Example 2:
// Input: [‘c’,’i’,’r’,’c’,’u’,’m’,’l’,’o’,’c’,’u’,’t’,’i’,’o’,’n’,‘n’,‘n’] ‘c’
// Output: [0, 8]


function a() {
    let n = +prompt("Enter The Number Of Elements In This Array");
    const arr = [n];
    for (let i = 0 ; i < n; i++) {
        var v = prompt("Enter The Index Of " + i);
        console.log(v);
    }
    let special = prompt("Please Enter Any Index Of The Array");
    console.log(arr.indexOf(special));
    console.log(arr.lastIndexOf(special));
}

a();


//=============================================================================


