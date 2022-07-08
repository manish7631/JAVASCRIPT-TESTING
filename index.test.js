const sum = require("./index")

describe('Testing Sum Function', () => {
test("add 2 positive numbers", () => {
    expect(sum(1, 2, 4, 5, 6, 7, 7)).toBe(32);
})

})