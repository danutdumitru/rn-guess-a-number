class NumberGenerator {
    constructor(minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.numberValue = null;
    }

    getRandomNumber() {
        const newNumber = Math.floor(Math.random() * (this.maxValue - this.minValue)) + this.minValue;
        this.numberValue = newNumber;
        return this;
    }

}

export default NumberGenerator;