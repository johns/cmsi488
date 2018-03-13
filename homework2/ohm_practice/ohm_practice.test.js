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
      'A7X 2P8',
      'P8E 4R2'
    ];
    const bad = [
      'A7X   9B2',
      'C7E9U2',
      '',
      'Dog'
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
