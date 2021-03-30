function validatePIN(pin) {
    let nums = '1234567890'.split('');
    let pinNums = pin.split('');
    for (const num of pinNums) {
        if (!nums.includes(num)) {
            return false;
        }
    }
    return (pinNums.length === 4 || pinNums.length === 6);
}