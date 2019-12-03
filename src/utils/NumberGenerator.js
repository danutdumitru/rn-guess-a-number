class NumberGenerator {
    constructor(maxValue, number) {
        this.maxValue = maxValue;
        this.number = number? number: Math.floor(Math.random() * maxValue);
    } 

    guessHigher() {
        
    }
}

export default NumberGenerator;