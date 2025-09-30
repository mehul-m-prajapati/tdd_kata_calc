

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

    const negative_num = arr_num.filter(n => n < 0);
    if (negative_num.length > 0) {
        throw new Error(`negative numbers not allowed: ${negative_num.join(",")}`);
    }

    let sum = 0;
    for (let i = 0; i < arr_num.length; i++) {
        sum += parseInt(arr_num[i].trim());
    }

    return sum;
}

console.log(add(""));
console.log(add("1"));
console.log(add("1,2"));
console.log(add("1\n2,3"));
console.log(add("//;\n1;2"));

try {
  add("1,-2");
}
catch (e) {
  console.error(e.message);
}

module.exports = add;
