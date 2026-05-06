/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Problem: Loan Monthly Payment Calculator
*/

function calculateMonthlyPayment(principal, annualInterestRate, loanTermYears) {

    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = loanTermYears * 12;

    const numerator = 
    monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);

    const denominator = 
    Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

    const monthlyPayment = principal * (numerator / denominator);

    return monthlyPayment;
}

// Test
const test1 = calculateMonthlyPayment(10000, 0.12, 1);
console.log(`
    **********************************************
    Monthly Payment: $${test1.toFixed(2)}
    **********************************************
`);