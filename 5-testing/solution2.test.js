// Another option is to define the expectations of each test inside the test itself. 
// This makes sure no values can leak between tests.

function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

describe('sum', () => {
    it('should be 3', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    it('should be 7', () => {
        const result = sum(3, 4);
        expect(result).toBe(7);
    });
});