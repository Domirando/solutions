let a = parseInt(prompt("Enter a first number: "));
let b = parseInt(prompt("Enter a second number: "));
let c = parseInt(prompt("Enter a third number: "));
if (a>c && a>b) {
    biggest_number = a;
} else if(b>a && b>c){
    biggest_number = b;
} else if (c>a && c>b){
    biggest_number = c;
}
alert(biggest_number + " is the biggest number which you entered!");