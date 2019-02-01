var math = {
    okAdd: (item1, item2) => item1 + item2,
    okSubtract: (item3, item4) => item3 - item4,
    okDivide: (item5, item6) => item5 / item6,
    okMultiply: (item7, item8) => item7 * item8,
    okSquared: (item9) => item9 * item9,
    evenOrOdd: (item10) => {
        if (item10 %2 === 0) {
            return "even"; 
        } else {
            return "odd";
        }
    },
    digitLength: (num) => {
        var digString = num.toString();
        return digString.length;
    }
}

module.exports = math;