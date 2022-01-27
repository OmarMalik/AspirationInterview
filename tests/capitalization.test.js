const capitalizeNthAlphanumericChar = require('../lib/capitalization.js')

const baseString = "Aspiration.com"

describe("testing capitalization", () => {
    test(`input: ${baseString}, 3`, () => {
        const result = capitalizeNthAlphanumericChar(baseString, 3)
        expect(result).toBe("asPirAtiOn.cOm")
    })

    test(`input: ${baseString}, 4`, () => {
        const result = capitalizeNthAlphanumericChar(baseString, 4)
        expect(result).toBe("aspIratIon.cOm")
    })
})