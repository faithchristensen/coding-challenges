var math = {
    okAdd: function(item1, item2) {
        return item1 + item2;
    },
    okSubtract: function(item3, item4) {
        return item3 - item4;
    },
    okDivide: function(item5, item6) {
        return item5 / item6;
    },
    okMultiply: function(item7, item8) {
        return item7 * item8;
    },
    okSquared: function(item9) {
        return item9 * item9;
    },
    evenOrOdd: function(item10) {
        if (item10 %2 === 0) {
            return "even"; 
        } else {
            return "odd";
        }
    },
    digitLength: function(num) {
        var digString = num.toString();
        return digString.length;
    }
}

module.exports = math;