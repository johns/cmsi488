function isCanadianPostalCode(s) {
  return /^[A-Z]\d[A-Z] \d[A-Z]\d$/.test(s);
}

function isLegalVisa(s) {
  return /^4\d{12}(\d{3})?$/.test(s);
}

function isLegalMasterCard(s) {
  return /^5[1-5]\d{14}$/.test(s);
}

function isAda95(s) {
  return /`^\d (_?\d)*
  (
    \. \d (_?\d)* | [\da-f](_?[\da-f])* (\. [\da-f](_?[\da-f])*)?
  )?
  (e [+-]? \d(_?\d)*)?$`/.test(s);
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
  return /^$/.test(s);
}

function isLatinNotForFileFindWithLookAround(s) {
  return /^(?!file$|find$|for$)[A-Za-z]*$/.test(s);
}
