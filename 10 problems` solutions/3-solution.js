let x = parseInt(prompt("Enter a X number: "))
let y = parseInt(prompt("Enter a Y number: "))
let smallest_number = (x+y)/2;
let biggest_number = (x*y)*2;
console.log("X(1-condition) = " + x + "<br>" + "Y(1-condition) = " + y)
if (x>y){
    document.write("x(2-condition) = " + biggest_number + "<br>" + "y(2-condition) = " + smallest_number)
}else if (y>x){
    document.write("x(2-condition) = " + smallest_number + "<br>" + "y(2-condition) = " + biggest_number)
}