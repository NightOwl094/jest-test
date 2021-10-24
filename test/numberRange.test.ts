
test("number test", () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3) // 보다 큰 가?
    expect(value).toBeGreaterThanOrEqual(3.5) // 보다 크거나 같은가?
    expect(value).toBeLessThan(5) // 보다 작은가?
    expect(value).toBeLessThanOrEqual(4.5) // 보다 작거나 같은가?

    expect(value).toBe(4)
    console.log("number test 검증 완료")
})

// 테스트를 그룹핑
describe("number range test", () => {
    let targetValue: number

    beforeAll(() => {
        console.log("테스트 전 호출")
        targetValue = 4
    })

    afterAll(() => {
        console.log("테스트 종료 후 호출")
        targetValue = 0
    })

    test("value is greater than 3", () => {
        expect(targetValue).toBeGreaterThan(3)
    })

    test("value is greater than or equal 3", () => {
        expect(targetValue).toBeGreaterThanOrEqual(3)
    })

    test("value is less than 5", () => {
        expect(targetValue).toBeLessThan(5)
    })

    test("value is less than or equal 4.5", () => {
        expect(targetValue).toBeLessThanOrEqual(4.5)
    })

    test("value is equal 4", () => {
        expect(targetValue).toBe(4)
    })

})
