describe("Convert Celcius to Farheinheit", () => {
    it("should return a number", () => {
        let n = convertToF(0);
        expect(typeof n).toBe("number");
    }),
    it("should return -22 when given -30", () => {
        expect(convertToF(-30)).toEqual(-22);
    }),
    it("should return 14 when given -10", () => {
        expect(convertToF(-10)).toEqual(14);
    }),
    it("should return 32 when given 0", () => {
        expect(convertToF(0)).toEqual(32);
    }),
    it("should return 68 when given 20", () => {
        expect(convertToF(20)).toEqual(68);
    }),
    it("should return 86 when given 30", () => {
        expect(convertToF(30)).toEqual(86);
    })
})