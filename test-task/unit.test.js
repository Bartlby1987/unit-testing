const {isNumber, asyncFunction} = require('./unit')

describe("isNumber function: ", () => {
    test("isNumber should check if the type of two values is a number", () => {
        expect(isNumber(1, 3)).toBe("Number")
        expect(isNumber('1', 3)).toBe("Number")
    })
})

describe("asyncFunction function:", () => {
    test("Should return value division value of two number", async () => {
        expect(await asyncFunction(6, 2)).toBe(3)
    })
})
