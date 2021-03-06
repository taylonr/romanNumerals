import chai from 'chai';
import Library from '../src/index.js';

chai.expect();
const expect = chai.expect;

var lib;

describe('Adding', function () {
    before(function () {
        lib = new Library();
    });
    it('Adding I + I Should equal II', () => {
        expect(lib.add('I', 'I')).to.eql('II');
    });
    it('Adding I + II Should equal III', () => {
        expect(lib.add('I', 'II')).to.eql('III');
    });
    it('Adding II + II Should equal IV', () => {
        expect(lib.add('II', 'II')).to.eql('IV');
    });
    it('Adding I + III Should equal IV', () => {
        expect(lib.add('I', 'III')).to.eql('IV');
    });
    it('Adding III + I Should equal IV', () => {
        expect(lib.add('III', 'I')).to.eql('IV');
    });
    it('Adding I + IV Should equal V', () => {
        expect(lib.add('I', 'IV')).to.eql('V');
    });
    it('Adding IV + I Should equal V', () => {
        expect(lib.add('IV', 'I')).to.eql('V');
    });
    it('Adding II + III Should equal V', () => {
        expect(lib.add('II', 'III')).to.eql('V');
    });
    it('Adding III + II Should equal V', () => {
        expect(lib.add('III', 'II')).to.eql('V');
    });
    it('Adding II + IV Should equal VI', () => {
        expect(lib.add('II', 'IV')).to.eql('VI');
    });
    it('Adding II + V Should equal VII', () => {
        expect(lib.add('II', 'V')).to.eql('VII');
    });
    it('Adding VI + III should equal IX', () => {
        expect(lib.add('VI', 'III')).to.eql('IX');
    });
    it('Adding IV + VII should equal XI', () => {
        expect(lib.add('IV', 'VII')).to.eql('XI');
    });
    it('Adding IX + IX should equal XVIII', () => {
        expect(lib.add('IX', 'IX')).to.eql('XVIII');
    });
    it('Adding XIV + XXVII should equal XLI', () => {
        expect(lib.add('XIV', 'XXVII')).to.eql('XLI');
    });
    it('Adding XLV + XIX should equal LXIV', () => {
        expect(lib.add('XLV', 'XIX')).to.eql('LXIV');
    });
    it('Adding XLIX + XLVIII should equal XCVII', () => {
        expect(lib.add('XLIX', 'XLVIII')).to.eql('XCVII');
    });
    it('Adding XCIV + LXXXII should equal CLXXVI', () => {
        expect(lib.add('XCIV', 'LXXXII')).to.eql('CLXXVI');
    });
    it('Adding CCCIX + XCIV should equal CDIII', () => {
        expect(lib.add('CCCIX', 'XCIV')).to.eql('CDIII');
    });
    it('Adding CDLXI + CCXLVII should equal DCCVIII', () => {
        expect(lib.add('CDLXI', 'CCXLVII')).to.eql('DCCVIII');
    });
    it('Adding DCCXCIX + CDXXVII should equal MCCXXVI', () => {
        expect(lib.add('DCCXCIX', 'CDXXVII')).to.eql('MCCXXVI');
    });
    it('Adding DIX + CDXLIV should equal CMLIII', () => {
        expect(lib.add('DIX', 'CDXLIV')).to.eql('CMLIII');
    });
    it('Adding MDLV + MMCDXLIV should equal MMMCMXCIX', () => {
        expect(lib.add('MDLV', 'MMCDXLIV')).to.eql('MMMCMXCIX');
    });
});
