let firstName = "Vitalii";
let lastName = "Kuznetsov";
let fullName ='${firstName} ${lastName}'
console.log(fullName)

let length = 2;
let width = 4;
length*width
console.log(length*width)

console.log(Math.pow(10, 6))

console.log(Math.floor(Math.random()*50))

let number = 0;
if(number <0) {
    console.log("negative value")
} else {
    console.log("possitive value")
}
 let text = "pokerface";
 if (text.length > 1) {
    console.log(text.slice(-2,-1))
 }
 let month =7;
 switch(month) {
    case 1:
    console.log("January");
    break;
    case 2:
    console.log("February");
    break;
    case 3:
    console.log("March");
    break;
    case 4:
    console.log("April");
    break;
    case 5:
    console.log("May");
    break;
    case 6:
    console.log("June");
    break;
    case 7:
    console.log("July");
    break;
    case 8:
    console.log("August");
    break;
    case 9:
    console.log("September");
    break;
    case 10:
    console.log("October");
    break;
    case 11:
    console.log("November");
    break;
    case 12:
    console.log("December");
    break;
    default:
        console.log (" month is not found")
 }
let password ="qwertyasdf";
if (password.lenght > 5)
if (password.indexOf("&")>0) {
    console.log("this password is strong"); 
} else{console.log("this password is weak");
}
let a =10;
let b =25;
if (typeof(a)=="number"&&typeof(b)=="number") {
    console.log(a+b);
} else {
    console.log("Some of those items can't be counted!")
}
let text0ne="opapaopapa"
let textTwo="dosvudanya"
    if (typeof(textOne)=="string"&&typeof(textTwo) == "string"&&textOne.length==textTwo.length){
    } else{ console.log("Items are not comportable!")
    }
