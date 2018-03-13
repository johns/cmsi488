const ohm = require('ohm-js');

const isCanadianPostalCode = ohm.grammar(`A {
  // DFIOUQWZ
  code = ("A".."C" | "E" | "G".."H" | "J".."N" | "P" | "R".."T" | "V" | "X".."Y") digit ("A".."C" | "E" | "G".."H" | "J".."N" | "P" | "R".."T" | "V".."Z") " " digit ("A".."C" | "E" | "G".."H" | "J".."N" | "P" | "R".."T" | "V".."Z") digit
}`);

const isLegalVisa = ohm.grammar(`B {
  card = "4" d d d d d d d d d d d d (d d d)?
  d = digit
}`);

const isLegalMasterCard = ohm.grammar(`C {
  card = "5" ("1".."5") d d d d d d d d d d d d d d
  d = digit
}`);

const isAda95 = ohm.grammar(`D {
    float = digits (decimal | based)? exp?
    decimal = "." digits
    digits = digit ("_"? digit)*
    based = "#" hexDigits ("." hexDigits)? "#"
    hexDigits = hexDigit ("_"? hexDigit)*
    exp = ("E" | "e") ("+" | "-")? digits
  }`);

const isLatinNotThreeEndingInOO = ohm.grammar(`E {
  latin = exp3 | exp2 | exp1 | exp
  exp = letter
  exp1 = letter letter
  exp2 = letter validEnding
  exp3 = letter letter letter letter+
  validEnding = ("a".."n" | "p".."z" | "A".."N" | "P".."Z") ("a".."n" | "p".."z" | "A".."N" | "P".."Z") |
                letter ("a".."n" | "p".."z" | "A".."N" | "P".."Z") |
                ("a".."n" | "p".."z" | "A".."N" | "P".."Z") letter
}`);

const isBinaryDivisibleBy32 = ohm.grammar(`F {
  binary = "0" binary		--zero
    			| "1" binary	--one
          | "00000"		  --end
}`);

const isDecimal2Through36 = ohm.grammar(`G {
  firstDigit = "1" digit      --tens
              | "2" digit     --twenties
              | "3" sixBound	--thirties
              | "2".."9"      --ones
    sixBound = "0".."6"
}`);

const isMLComment = ohm.grammar(`H {
  comment = "(*" contentParam "*)"
  contentParam = ( ~"*)" ~"(*" any )*
}`);

const isLatinNotForFileFindNoLookAround = ohm.grammar(`I {
  string = exp1 | exp2 | exp3

  exp1 = "find" letter+ | "for" letter+ | "file" letter+
  exp2 = ("a".."e"|"g".."z"|"A".."Z") letter*
  exp3 = "fin" (("a".."c"|"e".."z"|"A".."Z") letter*)?
  		  | "fil" (("a".."d"|"f".."z"|"A".."Z") letter*)?
		    | "fi" (("a".."m"|"o".."z"|"A".."Z") letter*)?
        | "fo" (("a".."q"|"s".."z"|"A".."Z") letter*)?
        | "f" (("a".."n"|"p".."z"|"A".."Z") letter*)?
}`);

const isLatinNotForFileFindWithLookAround = ohm.grammar(`J {
  string = ~reject accept*
  accept = letter
  reject = ("for" | "find" | "file") ~accept
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
