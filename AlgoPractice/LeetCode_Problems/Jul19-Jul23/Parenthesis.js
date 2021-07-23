var generateParenthesis = function (n) {
    let res = [];

    let generateString = function (open, close, string) {
        if (open > close) return;

        if (open == 0 && close == 0) {
            res.push(string);
        }

        if (open !== 0) {
            generateString(open - 1, close, string + '(');
        }

        if (close !== 0) {
            generateString(open, close - 1, string + ')');
        }
    }

    generateString(n, n, "");
    return res;
};