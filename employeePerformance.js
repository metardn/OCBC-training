// dummy table
const employees = [
  { EmployeeID: 1, FullName: "Alice Johnson", PerformanceScore: 82 },
  { EmployeeID: 2, FullName: "Bob Smith", PerformanceScore: 45 },
  { EmployeeID: 3, FullName: "Charlie Davis", PerformanceScore: 76 },
  { EmployeeID: 4, FullName: "Diana Ross", PerformanceScore: 90 },
  { EmployeeID: 5, FullName: "Ethan Brown", PerformanceScore: 67 },
];

// get performance
function getPerformanceRating(score) {
  if (score < 50) return "Needs Improvement";
  if (score < 75) return "Meets Expectations";
  if (score < 90) return "Exceeds Expectations";
  return "Outstanding";
}

// sort
const sortedEmployees = employees.sort((a, b) => a.EmployeeID - b.EmployeeID);

// read all employee & get rating
for (const emp of sortedEmployees) {
  const rating = getPerformanceRating(emp.PerformanceScore);
  console.log(
    `${emp.FullName} (ID: ${emp.EmployeeID}) has a performance rating of: ${rating}`
  );
}
