// EMI formula:  EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
//   P = loan amount, r = monthly interest rate, n = number of months

export function calculateEmi(loanAmount: number, yearlyRatePercent: number, years: number) {
  const months = years * 12;
  const r = yearlyRatePercent / 12 / 100;

  // If the rate is 0, the EMI is just the loan split equally
  const emi =
    r === 0
      ? loanAmount / months
      : (loanAmount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);

  const totalPayable = emi * months;
  return { emi, totalPayable, totalInterest: totalPayable - loanAmount };
}

// 4500000 -> "₹45,00,000" (Indian number format)
export function formatRupees(amount: number) {
  return "₹" + Math.round(amount).toLocaleString("en-IN");
}

// 4500000 -> "₹45 lakh",  25000000 -> "₹2.5 crore"
export function formatLakhCrore(amount: number) {
  if (amount >= 10000000) return `₹${+(amount / 10000000).toFixed(2)} crore`;
  return `₹${+(amount / 100000).toFixed(1)} lakh`;
}
