/*
nextInLine([], 5) should return a number.
nextInLine([], 1) should return 1
nextInLine([2], 1) should return 2
nextInLine([5,6,7,8,9], 1) should return 5
After nextInLine(testArr, 10), testArr[4] should be 10
*/

describe('nextInLine', () => {
  it('should return a number', () => {
    let result = nextInLine([], 5);
    expect(typeof result).toBe("number");
  });
  it('should return 1 when given ([], 1)', () => {
    expect(nextInLine([],1)).toBe(1);
  });
  it('should return 2 when given ([2], 1)', () => {
    expect(nextInLine([2], 1)).toBe(2);
  });
  it('should return 5 when given ([5,6,7,8,9], 1)', () => {
    expect(nextInLine([5,6,7,8,9], 1)).toBe(5);
  });
  it('should have 10 as the value for testArr[4] after given (testArr, 10)', () => {
    var testArr = [1,2,3,4,5];
    nextInLine(testArr, 10);
    expect(testArr[4]).toBe(10);
  });
});