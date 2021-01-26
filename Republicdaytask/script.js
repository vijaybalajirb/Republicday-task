//https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f

//qn-1-addFive

let result=(num)=>num+5;
console.log(result(5))
console.log(result(0))
console.log(result(-5))

//Qn-2-getOpposite

let opp=(num)=>{if(isNaN(num)||num!=/^-?[0-9]+$/){return num=-1}else{return num-num*2}};
console.log(opp(5.5))

//Qn-3 -convert to sec

let toSeconds=(num)=>num*60;
console.log(toSeconds(5))

//Qn-4
let toInt=(str)=>parseInt(str);
console.log(toInt("6"))

//Qn-4
let plusOne=(num)=>num+1;
console.log(plusOne(0))

//Qn-5
let firstEle=(arr)=>arr[0]
arr=[1,2,3]
console.log(firstEle(arr))

//Qn-6
let hrtoSec=(hr)=>hr*60*60
console.log(hrtoSec(2))

//Qn-7 Perimeter
let Perimeter=(arg1,arg2)=>2*(arg1+arg2)
console.log(Perimeter(6,7))

//Qn-8 Less then 100
let lt100=(arg1,arg2)=>{if(arg1+arg2<100){return true}else{return false}}
console.log(lt100(6,7))

//Qn-9
let remainder=(a,b)=>a%b;
console.log(remainder(-9,45))

//Qn-10
let MacDonald=(turkey,horse,pigs)=>turkey*2+horse*4+pigs*4
console.log(MacDonald(2,3,5))

//Qn-11
let frames=(a,b)=>a*(b*60)
console.log(frames(10,25))

//Qn-12
let divby5=(a)=>a%5==0
console.log(divby5(5))

//Qn-13
let isEven=(a)=>{if(isNaN(a)){return -1}else{return a%2==0}}
console.log(isEven(12))

//Qn-14
let rbo=(a,b)=>a%2!=0&&b%2!=0;
console.log(rbo(1,3))

//Qn15
let getFullname=(str1,str2)=>(str1+" "+str2)
console.log(getFullname("guvi","Geek"))

//Qn16
let getLengthOfWord=(str)=>{if(isNaN(str)){return str.length}else{return -1}}
console.log(getLengthOfWord("GUVI"));

//Qn-17
let isSameLength=(word1, word2)=>word1.length==word2.length;
console.log(isSameLength("GUVI","Geek"))

//calculate the distance between two points 
let getDistance=(x1, y1, x2, y2)=>Math.sqrt(((x2-x1)**2)-((y2-y1)**2))
console.log(getDistance(100, 100, 400, 300));

//getNthElement
let getNthElement=(arr,i)=>arr[i]
console.log(getNthElement([1, 3, 5], 1));

//getLastElement
let getLastElement=(arr)=>arr[arr.length-1]
console.log(getLastElement([1, 2, 3, 4]))

//getProperty
let getProperty=(obj,mykeys)=>{var obj={mykeys:"value"}; return obj.mykeys}
console.log(getProperty("obj","mykey"));

//addProperty
let addProperty=(obj,mykeys)=>{mykeys,true}
console.log(addProperty("obj", "mykey"));

//removeProperty
let removeProperty=(objs,prop)=>{obj={age:26}; delete obj.prop; return obj.prop }
console.log(removeProperty("objs","age"))

//countPositivesSumNegatives
let arrsr=(arr)=>{
    count=0;
    sum=0;
n=[]
for(i=0;i<arr.length;i++){
    if(arr[i]<0)
    {
        n.push(arr[i])
    }else{
        count++;
    }
}
for(k=0;k<n.length;k++){
    sum=sum+n[k]
}

return [count,sum]

}
var arrs = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(arrsr(arrs));

//getPositives
let getPositives=(arr)=>{
    s=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]>0){
            s.push(arr[i])
        }

    }
    return s;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(getPositives(ar))

//powersOfTwo

let powersOfTwo=(num)=>{
    s=[1];
    for(i=1;i<=num;i++){
        s.push(i*2)
    }
    return s;
}
console.log(powersOfTwo(2))

//Find the maximum number in an array of numbers

let max=(arr)=>{arr.sort(function(a,b){return b-a})
return arr[0]}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log("Max "+max(ar))

//Given
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
  if(n%2!=0){return true}
}

//given
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{s=[]
 for(i=startAt+1;i<=startAt+nPrimes+10;i++){
 if(isPrime(i)){
     s.push(i)
 }


}
return s
}
// Returns true if a number is prime
function isPrime(n)
{
    if(n%2!=0){return true}
}

//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   let rev=s.split("").reverse().join("")
   return rev
}

//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 for(let el of ar2)
 {
 result.push(el);
 }
 
 return result;
}

//Calculate the sum of numbers received in a comma delimited string

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  let arr=s.split(",")
  sum=0;
  for(i=0;i<arr.length;i++){
       sum=sum+ +arr[i];
  }
  return sum
}