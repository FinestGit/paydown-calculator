import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import TextInput from "../common/TextInput";

interface CurrencyInputProperties {
  inputLabel: string;
  name: string;
  placeholder: string;
  id: string;
  className?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  currency?: "$";
}

const CurrencyInput: FC<CurrencyInputProperties> = ({
  inputLabel,
  name,
  placeholder,
  id,
  className = "",
  value,
  onChange,
  currency = "$",
}): ReactNode => {
  const [displayValue, setDisplayValue] = useState<string>(value);
  const [controlledValue, setControlledValue] = useState<string>(value);
  const [previousValue, setPreviousValue] = useState<string>(value);

  const handleBlur = () => {
    const currencySplitString = handleCurrencyStringSplit(controlledValue);
    const decimalArray = currencySplitString.split(".");
    if (decimalArray.length === 2) {
      const decimalPortion = decimalArray[1];
      const decimalPortionArray = [...decimalPortion];
      const newDecimalArray = [
        ...decimalPortionArray.slice(0, 2),
        ".",
        ...decimalPortionArray.slice(2, decimalPortionArray.length),
      ];
      const joinedDecimalArray = newDecimalArray.join("");
      const roundedDecimal = Math.round(Number(joinedDecimalArray));
      const finalValue = `${decimalArray[0]}.${roundedDecimal}`;
      setDisplayValue(`${currency}${finalValue}`);
    } else {
      if (currencySplitString.length === 0) {
        setDisplayValue("");
      } else {
        setDisplayValue(`${controlledValue}.00`);
      }
    }
  };

  const handleCurrencyStringSplit = (localValue: string): string => {
    const temporaryValueArray = localValue.split(currency);
    let temporaryValue = temporaryValueArray[0];
    if (temporaryValueArray.length > 1) {
      temporaryValue = temporaryValueArray[1];
    }
    if (temporaryValue === "" || temporaryValue === undefined) {
      return "";
    }
    return `${temporaryValue}`.trim();
  };

  useEffect(() => {
    const temporaryValue = handleCurrencyStringSplit(controlledValue);
    if (Number.isNaN(Number(temporaryValue))) {
      if (previousValue.length === 0) {
        setDisplayValue("");
      } else {
        setDisplayValue(`${currency}${previousValue}`);
      }
      onChange(previousValue);
    } else {
      if (temporaryValue.length === 0) {
        setDisplayValue("");
      } else {
        setDisplayValue(`${currency}${temporaryValue}`);
      }
      onChange(temporaryValue);
      setPreviousValue(temporaryValue);
    }
  }, [controlledValue]);

  return (
    <TextInput
      inputLabel={inputLabel}
      name={name}
      placeholder={placeholder}
      id={id}
      className={className}
      value={displayValue}
      onChange={setControlledValue}
      onBlur={handleBlur}
    />
  );
};

export default CurrencyInput;
