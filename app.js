

function add(numbers) {
    if (numbers === "")
        return 0;

    let delimiters = [",", "\n"];
    let num_str = numbers;

    // e.g. "//;\n1;2;3"
    if (numbers.startsWith("//")) {
        const p = numbers.split("\n");
        delimiters = [p[0].substring(2)];
        num_str = p[1];
    }

    for (const delim of delimiters) {
        num_str = num_str.split(delim).join(',');
    }

    const arr_num = num_str.split(',');
    let sum = 0;

    for (let i = 0; i < arr_num.length; i++) {
        sum += parseInt(arr_num[i].trim());
    }

    return sum;
}


module.exports = add;
