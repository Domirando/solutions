const n = parseInt(prompt('Enter a number: '));
for (let i = 0; i <= n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(`${i} <br>`)
    }
}