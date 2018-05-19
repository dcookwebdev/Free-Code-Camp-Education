describe('Mad Lib Game', () => {
    it('should return a string', () => {
        let a = wordBlanks("", "", "", "");
        expect(typeof a).toBe("string");
    });

    it('should contain all of the passed in words separated by non-word characters', () => {
        let words = ["dog", "big", "ran", "quickly"];
        let result = wordBlanks(...words);
        expect(result).toMatch(new RegExp(`( ${words.join(" | ")} )`));
    });

    it('should contain all of the passed in words separated by non-word characters', () => {
        let words = ["cat", "little", "hit", "slowly"];
        let result = wordBlanks(...words);
        expect(result).toMatch(new RegExp(`( ${words.join(" | ")} )`));
    });
});

