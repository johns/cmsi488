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
} = require('./ohm_practice.js');

const fs = require('fs');
const ohm = require('ohm-js');

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
    good.forEach(s => {
      expect(isCanadianPostalCode.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isCanadianPostalCode.match(s).succeeded()).toBeFalsy();
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
      expect(isLatinNotThreeEndingInOO.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotThreeEndingInOO.match(s).succeeded()).toBeFalsy();
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
      expect(isLatinNotForFileFindNoLookAround.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotForFileFindNoLookAround.match(s).succeeded()).toBeFalsy();
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
      expect(isLatinNotForFileFindWithLookAround.match(s).succeeded()).toBeTruthy();
    });
    bad.forEach(s => {
      expect(isLatinNotForFileFindWithLookAround.match(s).succeeded()).toBeFalsy();
    });
  });
});
