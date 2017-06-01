export default class Library {
    add(numeral, c) {
        const result = this.convertToIs(numeral) + this.convertToIs(c);
        return this.makeNumeral(result);
    }

    convertToIs(numeral) {
        return numeral
            .replace(/M/g, 'DD')
            .replace(/CD/g, 'CCCC')
            .replace(/D/g, 'CCCCC')
            .replace(/XC/g, 'XLL')
            .replace(/C/g, 'LL')
            .replace(/XL/g, 'XXXX')
            .replace(/L/g, 'XXXXX')
            .replace(/X/g, 'VV')
            .replace(/IV/g, 'IIII')
            .replace(/V/g, 'IIIII');
    }

    makeNumeral(numeral) {
        return numeral
            .replace(/IIIIIIIIII/g, 'X')
            .replace(/XXXXX/g, 'L')
            .replace(/XXXX/g, 'XL')
            .replace(/LXL/g, 'XC')
            .replace(/LL/g, 'C')
            .replace(/CCCCC/g, 'D')
            .replace(/CCCC/g, 'CD')
            .replace(/DCD/g, 'CM')
            .replace(/DD/g, 'M')
            .replace(/IIIIIIIII/g, 'IX')
            .replace(/IIIII/g, 'V')
            .replace('IIII', 'IV');
    }
}
