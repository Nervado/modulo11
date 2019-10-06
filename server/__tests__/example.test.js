// Your code
function soma(a, b) {
  return a + b;
}
// Name your test with the expected results
test('If i add 2 plus 3 i expected 5 as a correctly result', () => {
  const result = soma(2, 3);
  expect(result).toBe(5);
});
