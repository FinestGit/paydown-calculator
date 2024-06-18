import { FC, ReactNode, useEffect, useState } from "react";

import TextInput from "./common/TextInput";
import CurrencyInput from "./DebtForm/CurrencyInput";

const DebtForm: FC = (): ReactNode => {
  const [debtName, setDebtName] = useState<string>("");
  const [amountRemaining, setAmountRemaining] = useState<string>("");
  const [monthlyPaymentAmount, setMonthlyPaymentAmount] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");

  useEffect(() => {
    console.log(amountRemaining);
  }, [amountRemaining]);

  return (
    <>
      <TextInput
        inputLabel={"Debt Name: "}
        name={"debt-name"}
        placeholder={"Input Debt Name"}
        id={"debt-name"}
        value={debtName}
        onChange={setDebtName}
      />
      <CurrencyInput
        inputLabel={"Amount Remaining: "}
        name={"amount-remaining"}
        placeholder={"Amount Remaining"}
        id={"amount-remaining"}
        value={amountRemaining}
        onChange={setAmountRemaining}
      />
      <CurrencyInput
        inputLabel={"Monthly Payment Amount: "}
        name={"monthly-payment-amount"}
        placeholder={"Monthly Payment Amount"}
        id={"monthly-payment-amount"}
        value={monthlyPaymentAmount}
        onChange={setMonthlyPaymentAmount}
      />
      <TextInput
        inputLabel={"Interest Rate (APY): "}
        name={"interest-rate"}
        placeholder={"Interest Rate (APY)"}
        id={"interest-rate"}
        value={interestRate}
        onChange={setInterestRate}
      />
    </>
  );
};

export default DebtForm;
