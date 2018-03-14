function isCanadianPostalCode(s) {
  return /^[^DFIOQUWZ0-9]\d[^DFIOQU0-9] \d[^DFIOQU0-9]\d$/.test(s);
}

function isLegalVisa(s) {
  return /^4\d{12}(\d{3})?$/.test(s);
}

function isLegalMasterCard(s) {
  return /^5[1-5]\d{14}$/.test(s);
}

function isAda95(s) {
  return new RegExp(String.raw`^\d (_?\d)*
  (
    \. \d (_?\d)* | # [\da-f](_?[\da-f])* (\. [\da-f](_?[\da-f])*)? #
  )?
  (e [+-]? \d(_?\d)*)?$`.replace(/\s+/g, ''), 'i').test(s);
}

function isLatinNotThreeEndingInOO(s) {
  return /^([a-z]{0,2}|[a-z]{2}[a-np-z]|[a-z][a-np-z][a-z]|[a-z]{4,})$/i.test(s);
}

function isBinaryDivisibleBy32(s) {
  return /^(0{1,4}|[01]*00000)$/.test(s);
}

function isDecimal2Through36(s) {
  return /^([2-9]|[12]\d|3[0-6])$/.test(s);
}

function isMLComment(s) {
  return /^\(\*((?!\*\)).)*\*\)$/.test(s);
}

function isLatinNotForFileFindNoLookAround(s) {
  return new RegExp(`^(
    [a-eg-zA-Z][a-zA-Z]*
    | f([a-hj-np-z][a-zA-Z]*)?
    | fi([a-k-mo-zA-Z][a-zA-Z]*)?
    | fil([a-df-zA-Z][a-zA-Z]*)?
    | file[a-zA-Z]+
    | fin([a-ce-zA-Z][a-zA-Z]*)?
    | find[a-zA-Z]+
    | fo([a-qs-zA-Z][a-zA-Z]*)?
    | for[a-zA-Z]+
  )?$`.replace(/\s+/g, '')).test(s);
}

function isLatinNotForFileFindWithLookAround(s) {
  return /^(?!file$|find$|for$)[A-Za-z]*$/.test(s);
}

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
