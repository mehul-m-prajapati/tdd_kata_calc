

function add(numbers) {
    if (numbers === "")
        return 0;

    const arr_num = numbers.split(',');
    let sum = 0;

    for (let i = 0; i < arr_num.length; i++) {
        sum += parseInt(arr_num[i]);
    }

    return sum;
}


module.exports = add;
