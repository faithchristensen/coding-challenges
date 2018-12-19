function okAdd(item1, item2) {
    return item1 + item2;
}
  
function okSubtract(item3, item4) {
    return item3 - item4;
}

function okDivide(item5, item6) {
    return item5 / item6;
}

function okMultiply(item7, item8) {
    return item7 * item8;
}
  
console.log(
    okDivide( okMultiply( okAdd(1,2), okSubtract(4, 2)), 6)
)