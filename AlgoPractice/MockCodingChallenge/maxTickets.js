function maxTickets(tickets) {
    let subsequences = [];
    tickets.sort((a, b) => a - b);
    let currentSub = [tickets[0]];

    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        let next = tickets[i + 1];
        if (currentSub.length === 0) {
            currentSub.push(ticket);
        }
        if ((next - ticket) === 1 || next === ticket) {
            currentSub.push(next);
        }
        else {
            subsequences.push(currentSub);
            currentSub = [];
        }
    }

    subsequences.sort((a, b) => b.length - a.length);
    return subsequences[0].length;
}

let tickets = [8, 5, 4, 4, 8];
console.log(maxTickets(tickets));
let testArray = [[1, 2, 3], [5, 4], [1, 5, 7, 8]];