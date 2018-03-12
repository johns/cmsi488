function isCanadianPostalCode(s) {
  return /^[a-zA-Z]\d[a-zA-Z](-)?\d[A-Za-z]\d$/.test(s);
}
