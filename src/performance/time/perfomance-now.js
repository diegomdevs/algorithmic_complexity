function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
const time_start = performance.now();
count(5);
const time_end = performance.now();

const duration = time_end - time_start;

console.log(`The algorithm you used has lasted: ${duration}ms.`);