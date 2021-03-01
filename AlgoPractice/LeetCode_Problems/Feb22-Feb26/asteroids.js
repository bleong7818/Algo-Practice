var asteroidCollision = function (asteroids) {
    let stack = [asteroids[0]];

    for (let i = 1; i < asteroids.length; i++) {
        let currentAsteroid = asteroids[i];

        if (stack[stack.length - 1] > 0 && currentAsteroid < 0) {
            while (stack[stack.length - 1] > 0 && currentAsteroid < 0) {
                if (Math.abs(stack[stack.length - 1]) > Math.abs(currentAsteroid)) {
                    break;
                }
                else if (Math.abs(stack[stack.length - 1]) < Math.abs(currentAsteroid)) {
                    stack.pop();
                    if (stack.length === 0 || stack[stack.length - 1] < 0) {
                        stack.push(currentAsteroid);
                    }
                }
                else {
                    stack.pop();
                    break;
                }
            }
        }
        else {
            stack.push(currentAsteroid);
        }
    }
    return stack;
};