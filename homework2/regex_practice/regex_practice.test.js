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
      "J7V 1J9",
      "H3E 1B5"
    ];
    const bad = [
      "D6H 8J0",
      "F78 41H",
      "A1A1A1",
      "J7V      1J9",
      ""
    ];
    good.forEach(s => {
      expect(isCanadianPostalCode(s)).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isCanadianPostalCode(s)).toBeFalsy();
    });
  });

  test('isLegalVisa', () => {
    const good = [
      "4178459843150734",
      "4094358498345",
      "4895467892178494"
    ];
    const bad = [
      "4988932",
      "9934687346897233",
      "bagel",
      "487583487534855"

    ];
    good.forEach(s => {
      expect(isLegalVisa(s)).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLegalVisa(s)).toBeFalsy();
    });
  });

  test('isLegalMasterCard', () => {
    const good = [
      "5394137483948295",
      "5227458934587632",
      "5543958719347834"
    ];
    const bad = [
      "5727458934587632",
      "5923894",
      "muffin",
      "3257485768754674"

    ];
    good.forEach(s => {
      expect(isLegalMasterCard(s)).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLegalMasterCard(s)).toBeFalsy();
    });
  });

  test('isAda95', () => {
    const good = [
      "9",
      "1.1e7",
      "14#eD52_4_9#"
    ];
    const bad = [
      "dot",
      "4ff",
      "_55",
      "1_"
    ];
    good.forEach(s => {
      expect(isAda95(s)).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isAda95(s)).toBeFalsy();
    });
  });

  test('isLatinNotThreeEndingInOO', () => {
    const good = [
      "a",
      "ab",
      "abc",
      "abcdef",
      "aop",
      "apo"
    ];
    const bad = [
      "aOO",
      "aOo",
      "aoo",
      "aoO"
    ];
    good.forEach(s => {
      expect(isLatinNotThreeEndingInOO(s)).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotThreeEndingInOO(s)).toBeFalsy();
    });
  });

  test('isBinaryDivisibleBy32', () => {
    const good = [
      '000000',
      '0000000',
      '110100000'
    ];
    const bad = [
      '1',
      '1010woof001',
      '00000000001'
    ];
    good.forEach(s => {
      expect(isBinaryDivisibleBy32(s)).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isBinaryDivisibleBy32(s)).toBeFalsy();
    });
  });

  test('isDecimal2Through36', () => {
    const good = [
      "2",
      "10",
      "30"
    ];
    const bad = [
      "1",
      "39",
      "foooo"
    ];
    good.forEach(s => {
      expect(isDecimal2Through36(s)).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isDecimal2Through36(s)).toBeFalsy();
    });
  });

  test('isMLComment', () => {
    const good = [
      "(**)",
      "(* *)",
      "(**999****)"
    ];
    const bad = [
      "(*)",
      "(****",
      "walrus",
      ""
    ];
    good.forEach(s => {
      expect(isMLComment(s)).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isMLComment(s)).toBeFalsy();
    });
  });

  test('isLatinNotForFileFindNoLookAround', () => {
    const good = [
      "f",
      "fi",
      "fo",
      "fin",
      "fil",
      "forabcd",
      "abcdfor"
    ];
    const bad = [
      "for",
      "file",
      "find"
    ];
    good.forEach(s => {
      expect(isLatinNotForFileFindNoLookAround(s)).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotForFileFindNoLookAround(s)).toBeFalsy();
    });
  });

  test('isLatinNotForFileFindWithLookAround', () => {
    const good = [
      "f",
      "fi",
      "fo",
      "fin",
      "fil",
      "forabcd",
      "abcdfor"
    ];
    const bad = [
      "for",
      "file",
      "find"
    ];
    good.forEach(s => {
      expect(isLatinNotForFileFindWithLookAround(s)).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotForFileFindWithLookAround(s)).toBeFalsy();
    });
  });

});
