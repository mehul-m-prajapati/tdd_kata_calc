

function add(numbers) {
    if (numbers === "")
        return 0;

    const normalized = numbers.replace(/\n/g, ',');
    const arr_num = normalized.split(',');
    let sum = 0;

    for (let i = 0; i < arr_num.length; i++) {
        sum += parseInt(arr_num[i]);
    }

    return sum;
}


module.exports = add;
