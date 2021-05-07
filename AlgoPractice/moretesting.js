function setCharAt(str, index, char) {
    return str.substring(0, index) + char + str.substring(index + 1);
}

let string = "hello";

console.log(setCharAt(string, 4, "a"));