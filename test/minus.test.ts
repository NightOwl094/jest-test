import {minus} from "../functions/minus";

test("minus 2 - 2 to equal 0", () => {
    expect(minus(2, 2)).toBe(0)
})

test("minus 5 - 4 to equal 1", () => {
    expect(minus(5, 4)).toBe(1)
})
