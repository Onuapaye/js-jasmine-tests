
describe("A Simple Mathematical Test Cases Suite", ()=>{

    let num1
    let num2

    beforeEach(() => {
        num1 = 4;
        num2 = 5;
    });

    describe("Adding numbers suite", function(){

        it("Adds two numbers", () => {
            // arrange


            // act
            const answer = addTwoNumbers(num1, num2);

            // assert
            expect(answer).toBe(9);
        })
    });

    describe("Subtracting numbers suite", () => {

        it("Subtracts two numbers", () => {
            // arrange
            // let num1 = 4;
            // let num2 = 5;

            // act
            const answer = subtractNumbers(num1, num2);

            // assert
            expect(answer).toBe(-1);
        });
    });

    describe("Multiply numbers suite", () => {
        it("Multiplies two numbers", () => {
            // arrange
            // let num1 = 4;
            // let num2 = 5;

            // act
            const answer = multiplyTwoNumbers(num1, num2);

            // assert
            expect(answer).toBe(20);
        })
    });

    describe("Dividing numbers suite", () => {
        it("Divides two numbers", () => {
            // arrange
            // let num1 = 4;
            // let num2 = 5;

            // act
            const answer = divideNumbers(num1, num2);

            // assert
            expect(answer).toBe(0.8);
        })
    });
})