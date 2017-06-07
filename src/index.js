export default class Library {
    add(numeral, c) {
        const result = this.convertToIs(numeral) + this.convertToIs(c);
        return this.makeNumeral(result);
    }

    convertToIs(numeral) {
        return numeral
            .replace('X', 'VV')
            .replace('IV', 'IIII')
            .replace('V', 'IIIII');
    }

    makeNumeral(numeral) {
        return numeral
            .replace('IIIIIIIIII', 'X')
            .replace('XXXX', 'XL')
            .replace('IIIIIIIII', 'IX')
            .replace('IIIII', 'V')
            .replace('IIII', 'IV');
    }
}
