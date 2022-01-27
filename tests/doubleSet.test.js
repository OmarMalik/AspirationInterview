const DoubleSet = require('../lib/doubleSet.js')

describe("test setup", () => {
    const set1 = new DoubleSet()
    const set2 = new DoubleSet()

    test("add more than 2 of one number", () => {
        set1.add(1)
        set1.add(1)
        set1.add(1)

        expect(set1.counts).toStrictEqual({1: 2})
    })

    test("subtract method delets the key from the map", () => {
        set1.subtract(1)
        expect(set1.counts).toStrictEqual({1: 1})

        set1.subtract(1)
        expect(set1.counts).toStrictEqual({})
    })

    test("adding two sets works", () => {
        set1.add(1)
        set1.add(1)
        set1.add(2)

        set2.add(1)
        set2.add(2)
        set2.add(-3)

        set1.addDoubleSet(set2)
        expect(set1.counts).toStrictEqual( { 1: 2, 2: 2, "-3": 1 } )
    })

    test("subtracting two sets works", () => {
        set1.clear()
        set2.clear()

        set1.add(1)
        set1.add(1)
        set1.add(2)
        set1.add(4)

        set2.add(1)
        set2.add(2)
        set2.add(2)
        set2.add(-3)

        set1.subtractDoubleSet(set2)
        expect(set1.counts).toStrictEqual({1:1, 4:1})  
    })
})

