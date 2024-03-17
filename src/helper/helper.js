export function genTicket(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}
export function sum(arr) {
  return arr.reduce((sum, current) => {
    return sum + current;
  });
}
