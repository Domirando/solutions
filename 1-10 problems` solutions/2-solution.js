let year = parseInt(prompt("Enter a year: "));
console.log(year);
if (year % 4 == 0 && year % 400 == 0){
    alert("It isn a Leap Year and it has 366 days")
}
else{
    alert("It isn`t a Leap Year and it has 365 days");
}