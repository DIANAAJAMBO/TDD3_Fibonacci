
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  let previous = 0;
  let current = 1;

  for (let a = 2; a <= n; a++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}

module.exports = fibonacci;
