class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
        // console.log(max);
        // this.range = this.max - this.min;
        // // console.log(this.range);
        // return this.range;
    }

    guess() {
        this.result;
        // console.log(this.max);
        // console.log(this.min);
        this.result = Math.ceil((this.max + this.min) / 2);
        // console.log(this.result);
        return this.result;
    }

    lower() {
        // console.log(this.result);
        this.max = this.result;
        // console.log(max);
        return this.max;
    }

    greater() {
        this.min = this.result;
        // console.log(this.min);
        // console.log(this.max);
        return this.min;
    }
}

module.exports = GuessingGame;
