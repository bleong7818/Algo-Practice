var numUniqueEmails = function (emails) {
    let emailList = [];

    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        let preAt = email.split("@")[0];
        let postAt = email.split("@")[1];
        let noPeriods = preAt.split(".").join("");
        let removePlus = noPeriods.split("+")[0];
        if (!emailList.includes(removePlus + "@" + postAt)) {
            emailList.push(removePlus + "@" + postAt);
        }
        // emailList.push(preAt);
    }
    return emailList.length;
};