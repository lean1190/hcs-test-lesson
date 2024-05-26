/**
 * How can we use immutable concepts in tests?
 */

function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

describe('sum', () => {
    let result = 0;

    it('should be 3', () => {
        result += sum(1, 2);
        expect(result).toBe(3);
    });

    it('should be 7', () => {
        result = sum(result, 4);
        expect(result).toBe(7);
    });
});

// ==> Do you notice any problems in these tests?