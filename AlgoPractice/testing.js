function validatePIN(pin) {
    if (pin < 0) return false;
    let alphabet = 'abcdefhijklmnopqrstuvwxyz'.split('');
    let pinNums = pin.split('');
    console.log(pinNums);
    let newPin = [];
    for (const num of pinNums) {
        if (!alphabet.includes(num)) {
            newPin.push(num);
        }
    }
    console.log(newPin);
    // return (newPin.length === 4 || newPin.length === 6);
}
console.log(validatePIN("1.234"));