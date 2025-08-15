const test = require("node:test");

const testResults = [
  { name: 'Login Test', status: 'Pass' },
  { name: 'Signup Test', status: 'fail' },
  { name: 'Checkout Test', status: 'Passed' },
  { name: 'Search Test', status: 'FAILED' },
  { name: 'Cart Test', status: 'PASS' }
];



const output = testResults.reduce(
  (acc, test) => {
    const normalizedStatus = test.status.toUpperCase() === 'PASS' ? 'PASS' : 'FAIL';

    // Update summary count
    acc.summary[normalizedStatus.toLowerCase()]++;

    // Push updated result
    acc.results.push({
      name: test.name,
      status: normalizedStatus
    });

    return acc;
  },
  { summary: { pass: 0, fail: 0 }, results: [] }
);

console.log(output);


