class Calculator {

    Total(x) {
        var result = x;
        for (let i = 1; i < x; i++) {
            result += i;
        }
        console.log("Total: " + result);
    }


    Multiply(x) {
        var result = x;
        for (let i = 1; i < x; i++) {
            result *= i;
        }
        console.log("Multiply: " + result);
    }

    Distribution(x) {
        var result = x;
        for (let i = 1; i < x; i++) {
            result /= i;
        }
        console.log("Distribution: " + result);
    }

    Power(x) {
        var result = x;
        for (let i = 1; i < x; i++) {
            result ^= i;
        }
        console.log("Power: " + result);
    }

}
export default Calculator;