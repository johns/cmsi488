const {
  isCanadianPostalCode,
  isLegalVisa,
  isLegalMasterCard,
  isAda95,
  isLatinNotThreeEndingInOO,
  isBinaryDivisibleBy32,
  isDecimal2Through36,
  isMLComment,
  isLatinNotForFileFindNoLookAround,
  isLatinNotForFileFindWithLookAround
} = require('./regex_practice.js');

const fs = require('fs');
const ohm = require('ohm-js');

describe('Regex tests', () => {

  test('isCanadianPostalCode', () => {
    const good = [
      "A1A 1A1",
      "J7V 1J9",
      "H3E 1B5"
    ];
    const bad = [
      "D6H 8J0",
      "F78 41H",
      "A1A1A1"
    ];
    good.forEach(s => {
      expect(isCanadianPostalCode.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isCanadianPostalCode.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isLegalVisa', () => {
    const good = [
      ""
    ];
    const bad = [
      ""
    ];
    good.forEach(s => {
      expect(isLegalVisa.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLegalVisa.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isLegalMasterCard', () => {
    const good = [
      ""
    ];
    const bad = [
      ""
    ];
    good.forEach(s => {
      expect(isLegalMasterCard.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLegalMasterCard.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isAda95', () => {
    const good = [
      ""
    ];
    const bad = [
      ""
    ];
    good.forEach(s => {
      expect(isAda95.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isAda95.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isLatinNotThreeEndingInOO', () => {
    const good = [
      ""
    ];
    const bad = [
      ""
    ];
    good.forEach(s => {
      expect(isLatinNotThreeEndingInOO.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotThreeEndingInOO.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isBinaryDivisibleBy32', () => {
    const good = [
      ""
    ];
    const bad = [
      ""
    ];
    good.forEach(s => {
      expect(isBinaryDivisibleBy32.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isBinaryDivisibleBy32.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isDecimal2Through36', () => {
    const good = [
      ""
    ];
    const bad = [
      ""
    ];
    good.forEach(s => {
      expect(isDecimal2Through36.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isDecimal2Through36.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isMLComment', () => {
    const good = [
      ""
    ];
    const bad = [
      ""
    ];
    good.forEach(s => {
      expect(isMLComment.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isMLComment.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isLatinNotForFileFindNoLookAround', () => {
    const good = [
      ""
    ];
    const bad = [
      ""
    ];
    good.forEach(s => {
      expect(isLatinNotForFileFindNoLookAround.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotForFileFindNoLookAround.match(s).succeeded()).toBeFalsy();
    });
  });

  test('isLatinNotForFileFindWithLookAround', () => {
    const good = [
      ""
    ];
    const bad = [
      ""
    ];
    good.forEach(s => {
      expect(isLatinNotForFileFindWithLookAround.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotForFileFindWithLookAround.match(s).succeeded()).toBeFalsy();
    });
  });

});
