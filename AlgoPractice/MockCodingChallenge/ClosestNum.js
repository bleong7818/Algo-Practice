function closestNumbers(numbers) {
    // Write your code here
    let results = [];
    let absDifference = Infinity;
    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let num2 = numbers[j];
            let currentDiff = Math.abs(num1 - num2);
            if (absDifference > currentDiff && currentDiff !== 0) {
                absDifference = currentDiff;
            }
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let num2 = numbers[j];
            let currentDiff = Math.abs(num1 - num2);
            if (currentDiff === absDifference && !results.include([num1, num2])) {
                results.push([num1, num2]);
            }
        }
    }
    return results;
}
