// Function to calculate Payee (Tax) based on the given gross salary
function calculatePayee(grossSalary) {
  let paye = 0;

  if (grossSalary <= 24000) {
    paye = 0.1 * grossSalary;
  } else if (grossSalary > 24000 && grossSalary <= 32333) {
    paye = 0.25 * grossSalary;
  } else if (grossSalary > 32333 && grossSalary <= 500000) {
    paye = 0.3 * grossSalary;
  } else if (grossSalary > 500000 && grossSalary <= 800000) {
    paye = 0.325 * grossSalary;
  } else if (grossSalary > 800000) {
    paye = 0.35 * grossSalary;
  }

  return paye;
}

// Function to calculate nhifRate Deductions based on the given gross salary
function calculatenhifRate(grossSalary) {
  // nhifRate deduction from of gross salary
  let nhifRate=0; 
  if (grossSalary > 0 && grossSalary <= 5999) {
    nhifRate = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    nhifRate = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    nhifRate = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    nhifRate = 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    nhifRate = 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    nhifRate = 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    nhifRate = 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    nhifRate = 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    nhifRate = 950;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    nhifRate = 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    nhifRate = 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    nhifRate = 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    nhifRate = 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    nhifRate = 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    nhifRate = 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    nhifRate = 1600;
  } else {
    nhifRate = 1700;
  }

  return nhifRate;
}

// Function to calculate NSSF Deductions based on the given basic salary
function calculateNSSF(basicSalary) {
  // 6% of basic salary
  const nssfRate = 0.06; 
  return nssfRate * basicSalary;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const payee = calculatePayee(grossSalary);
  const nhifRateDeductions = calculatenhifRate(grossSalary);
  const nssfDeductions = calculateNSSF(basicSalary);
  const netSalary = grossSalary - payee - nhifRateDeductions - nssfDeductions;

  return {
    grossSalary,
    payee,
    nhifRateDeductions,
    nssfDeductions,
    netSalary,
  };
}

// inpu value0f 300000 basic salary
const basicSalary = 300000;
const benefits = 5000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary: " + salaryDetails.grossSalary);
console.log("Payee (Tax): " + salaryDetails.payee);
console.log("nhifRate Deductions: " + salaryDetails.nhifRateDeductions);
console.log("NSSF Deductions: " + salaryDetails.nssfDeductions);
console.log("Net Salary: " + salaryDetails.netSalary);
