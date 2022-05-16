function fromEuroToDollar (euros) {
    let vauleInDollar = 1.2 * euros;
    return vauleInDollar;
}

function fromDollarToYen (dollars) {
    let valueInYen = 129.12 * dollars;
    return valueInYen;
}

function fromYenToPound (yens) {
    let valueInPound = 0.0063 * yens
    return valueInPound;
}
module.exports = {fromEuroToDollar: fromEuroToDollar, fromDollarToYen: fromDollarToYen, fromYenToPound: fromYenToPound}
