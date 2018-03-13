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

describe('Regex tests', () => {
  test('isCanadianPostalCode', () => {
    const good = [
      "A1A 1A1",
      "B2B 2B2"
    ];
    const bad = [
      "foo",
      "bar"
    ];
    good.forEach() => { //something is wrong here
      expect(isCanadianPostalCode(s)).toBeTruthy(); //something is wrong here
    };
    bad.forEach() => { //something is wrong here
      expect(isCanadianPostalCode(s)).toBeFalsy();//something is wrong here
    };
  });
});
