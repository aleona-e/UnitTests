const {fromEuroToDollar} = require('./app.js')
const {fromDollarToYen} = require('./app.js')
const {fromYenToPound} = require('./app.js')

test("1 Euro should be 1.2 dollars", function (){
    
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2

    expect(dollars).toBe(expected)

})

test("1 Dollar should be 129.12 Yens", function (){

    const yens = fromDollarToYen(3.6)
    const expected = 3.6 * 129.12

    expect(yens).toBe(expected)

})

test("1 Yen should be 0.0063 Pounds", function (){

    const pounds = fromYenToPound(10000)
    const expected = 10000 * 0.0063

    expect(pounds).toBe(expected)
})