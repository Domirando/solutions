// function is_perfect(number)
// {
//     var temp = 0;
//     for(var i=1;i<=number/2;i++)
//     {
//         if(number%i === 0)
//         {
//             temp += i;
//         }
//     }
//
//     if(temp === number && temp !== 0)
//     {
//         console.log("It is a perfect number.");
//     }
//     else
//     {
//         console.log("It is not a perfect number.");
//     }
// }
// is_perfect(28);
function findPerfectNumbers(upperLimit, currentTry = 2) {
    let perfectNumbers = [];
    let divisor;
    let sum;

    if (typeof upperLimit !== 'number' || isNaN(upperLimit) ||
        upperLimit < 2) {
        throw new TypeError(`First parameter is expected to a ` +
            `number larger then 1 which is not NaN.`);
    }

    while (currentTry <= upperLimit) {  // <------- Start outer loop
        divisor = 2;
        sum = 0;

        while (currentTry >= divisor) {   // <------- Start inner loop
            let fraction = currentTry / divisor;
            let leftOver = currentTry % divisor;

            if (leftOver === 0) {
                sum += fraction;
            }

            divisor++;
        }                                 // <-------- End inner loop

        if (sum === currentTry) {
            perfectNumbers.push(currentTry);
        }

        currentTry++;
    }                                   // <-------- End outer loop

    return perfectNumbers;
}
