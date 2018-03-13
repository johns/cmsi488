const ohm = require('ohm-js');

const isCanadianPostalCode = ohm.grammar(`A {
  code = "A".."Z" digit "A".."Z" " " digit "A".."Z" digit
}`);

const isLegalVisa = ohm.grammar(`B {
  card = "4" d d d d d d d d d d d d (d d d)?
  d = digit
}`);

const isLegalMasterCard = ohm.grammar(`C {

}`);

const isAda95 = ohm.grammar(`D {

}`);

const isLatinNotThreeEndingInOO = ohm.grammar(`E {

}`);

const isBinaryDivisibleBy32 = ohm.grammar(`F {

}`);

const isDecimal2Through36 = ohm.grammar(`G {

}`);

const isMLComment = ohm.grammar(`H {

}`);

const isLatinNotForFileFindNoLookAround = ohm.grammar(`I {

}`);

const isLatinNotForFileFindWithLookAround = ohm.grammar(`J {

}`);

module.exports = {
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
}
