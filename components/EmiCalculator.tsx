"use client";

import { useState } from "react";
import { calculateEmi, formatRupees } from "@/lib/emi";

export default function EmiCalculator() {
  // Starting values. The person can change them with the sliders.
  const [loanLakh, setLoanLakh] = useState(60); // loan amount in lakh
  const [rate, setRate] = useState(8); // interest rate per year (%)
  const [years, setYears] = useState(20); // loan tenure in years

  const { emi, totalInterest, totalPayable } = calculateEmi(loanLakh * 100000, rate, years);

  const loanAmount = loanLakh * 100000;
  const principalPercent = (loanAmount / totalPayable) * 100;

  // Banks like the total EMI to stay under about 40% of monthly income
  const incomeNeeded = emi / 0.4;

  return (
    <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-navy/5 md:grid-cols-2 md:p-10">
      {/* Sliders */}
      <div className="space-y-8">
        <Slider
          id="loan"
          label="Loan amount"
          valueText={`₹${loanLakh} lakh`}
          min={10}
          max={300}
          step={5}
          value={loanLakh}
          onChange={setLoanLakh}
        />
        <Slider
          id="rate"
          label="Interest rate per year"
          valueText={`${rate.toFixed(2)}%`}
          min={6}
          max={12}
          step={0.05}
          value={rate}
          onChange={setRate}
        />
        <Slider
          id="years"
          label="Loan tenure"
          valueText={`${years} years`}
          min={5}
          max={30}
          step={1}
          value={years}
          onChange={setYears}
        />
      </div>

      {/* Results */}
      <div className="rounded-2xl bg-navy p-6 text-ivory md:p-8" aria-live="polite">
        <p className="text-sm text-ivory/80">Your monthly EMI</p>
        <p className="mt-1 font-serif text-5xl text-gold">{formatRupees(emi)}</p>

        {/* Bar: how much of the total goes to the loan and how much to interest */}
        <div className="mt-8 flex h-3 w-full overflow-hidden rounded-full bg-gold" role="img" aria-label="Principal compared with interest">
          <div className="bg-ivory" style={{ width: `${principalPercent}%` }} />
        </div>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="flex items-center gap-2">
              <span aria-hidden className="h-3 w-3 rounded-full bg-ivory" /> Loan amount
            </dt>
            <dd>{formatRupees(loanAmount)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="flex items-center gap-2">
              <span aria-hidden className="h-3 w-3 rounded-full bg-gold" /> Total interest
            </dt>
            <dd>{formatRupees(totalInterest)}</dd>
          </div>
          <div className="flex justify-between border-t border-ivory/20 pt-2 font-semibold">
            <dt>Total you will pay</dt>
            <dd>{formatRupees(totalPayable)}</dd>
          </div>
        </dl>

        <p className="mt-6 text-sm text-ivory/80">
          To keep this EMI within 40% of your income, you would need to earn about{" "}
          <strong className="text-ivory">{formatRupees(incomeNeeded)}</strong> a month (after counting
          your other EMIs too).
        </p>
      </div>
    </div>
  );
}

// One label + range slider. Kept in this file because only the calculator uses it.
function Slider({
  id,
  label,
  valueText,
  min,
  max,
  step,
  value,
  onChange,
}: {
  id: string;
  label: string;
  valueText: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-semibold">
          {label}
        </label>
        <span className="font-serif text-2xl">{valueText}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 w-full accent-navy"
      />
    </div>
  );
}
