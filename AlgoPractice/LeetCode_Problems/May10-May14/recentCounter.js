var RecentCounter = function () {
    this.oldCalls = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.oldCalls.push(t);

    while (this.oldCalls[0] < (t - 3000)) {
        this.oldCalls.shift();
    }

    return this.oldCalls.length;
};
