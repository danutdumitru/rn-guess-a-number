class NumberGenerator {
    constructor(maxValue, number) {
        this.maxValue = maxValue;
        this.number = number? number: Math.floor(Math.random() * maxValue);
        console.log('New number: ', this.number);
    } 

    guessHigher() {
        const newValue = Math.floor(Math.random() * (this.maxValue - this.number)) + this.number ;
        this.number = newValue;
        console.log('New number: ', this.number);
        return this;
    }

    guessLower() {
        const newValue = Math.floor(Math.random() * this.number);
        this.number = newValue;
        console.log('New number: ', this.number);
        return this;
    }

}

export default NumberGenerator;