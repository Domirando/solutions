let day = parseInt(prompt("Enter a day: "))
let month = parseInt(prompt("Enter a month: "))
if (day<10 && month <10){
    alert("Next day is: "+(day+1)/10 + " Month: "+month/10)
}else if (day>10 && month >10){
    alert("Next day is: "+(day+1)/100 + " Month: "+month/100)
}