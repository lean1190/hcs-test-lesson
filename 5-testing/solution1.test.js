// The problem with these tests is they are interdependent.
// They depend on each other, so if one test fails, or doesn't run,
// the next one will fail as well.

// We can solve this problem by cleaning the value of "result" 
// before every test using "beforeEach".
// This will ensure that our "result" variable is clean in every test.

function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

describe('sum', () => {
    let result;

    beforeEach(() => {
        result = 0;
    })

    it('should be 3', () => {
        result += sum(1, 2);
        expect(result).toBe(3);
    });

    it('should be 7', () => {
        result = sum(result, 7);
        expect(result).toBe(7);
    });
});