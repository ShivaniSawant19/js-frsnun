let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

// ans = [virat, leo, cristiano, rohit, viswanath anand]

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

// ans = [leo, cristiano, viswanath, rohit, virat]

console.log('Students Information:');
testCase1.forEach((e) => {
  console.log(
    `total marks = ${e.biology} + ${e.chemistry} = ${e.biology + e.chemistry}`
  );
 });
// console.log(testCase1);
let sortedtestCase1 = testCase1.sort((p1, p2) =>
  p1.biology < p2.chemistry ? 1 : p1.biology > p2.chemistry ? -1 : 0
);

console.log(testCase1, sortedtestCase1);

testCase2.forEach((e) => {
  console.log(
    `total marks = ${e.biology} + ${e.chemistry} = ${e.biology + e.chemistry}`
  );
 });
// console.log(testCase1);
let sortedtestCase2 = testCase2.sort((p1, p2) =>
  p1.biology < p2.chemistry ? 1 : p1.biology > p2.chemistry ? -1 : 0
);

console.log(testCase1, sortedtestCase1);
