
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }
  return sum(fromN + 1, toN) + fromN;
}

module.exports = sum;
