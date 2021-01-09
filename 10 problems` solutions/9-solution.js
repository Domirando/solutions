let value = 2568,
    number = value,
    sum = 0,
    digits = 0;

while (value) {
    digits++
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(`The ${number} has ${digits} digits and their sum is uqual to ${sum}`);
