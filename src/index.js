export default class Library {
    add(numeral, c) {
        const result = this.convertToIs(numeral) + this.convertToIs(c);
        return this.makeNumeral(result);
    }

    convertToIs(numeral) {
        return numeral
            .replace(/X/g, 'VV')
            .replace(/IV/g, 'IIII')
            .replace(/V/g, 'IIIII');
    }

    makeNumeral(numeral) {
        return numeral
            .replace(/IIIIIIIIII/g, 'X')
            .replace(/XXXX/g, 'XL')
            .replace(/IIIIIIIII/g, 'IX')
            .replace(/IIIII/g, 'V')
            .replace(/IIII/g, 'IV');
    }
}
