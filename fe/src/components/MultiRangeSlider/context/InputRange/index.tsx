import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface InputRangeType {
  minInputValue: number;
  maxInputValue: number;
}

interface InputRangeSetterType {
  setMinInputValue: React.Dispatch<React.SetStateAction<number>>;
  setMaxInputValue: React.Dispatch<React.SetStateAction<number>>;
}

const inititalInputRange = {
  minInputValue: 10,
  maxInputValue: 1000,
};

const inititalInputRangeSetter = {
  setMinInputValue: () => {},
  setMaxInputValue: () => {},
};

export const InputRangeContext = createContext<InputRangeType>(inititalInputRange);

export const InputRangeSetterContext =
  createContext<InputRangeSetterType>(inititalInputRangeSetter);

export function InputRangeProvider({
  children,
  minPrice,
  maxPrice,
}: {
  children: React.ReactNode;
  minPrice: number;
  maxPrice: number;
}) {
  const [minInputValue, setMinInputValue] = useState(minPrice);
  const [maxInputValue, setMaxInputValue] = useState(maxPrice);

  const inputRange = useMemo(() => {
    return { minInputValue, maxInputValue };
  }, [minInputValue, maxInputValue]);

  const inputRangeSetter = useMemo(() => {
    return { setMinInputValue, setMaxInputValue };
  }, [setMinInputValue, setMaxInputValue]);

  useEffect(() => {
    console.log(`minInputValue: ${minInputValue} maxInputValue: ${maxInputValue}`);
  }, [minInputValue, maxInputValue]);

  return (
    <InputRangeSetterContext.Provider value={inputRangeSetter}>
      <InputRangeContext.Provider value={inputRange}>{children}</InputRangeContext.Provider>
    </InputRangeSetterContext.Provider>
  );
}

export const useInputRangeGetter = () => {
  const { minInputValue, maxInputValue } = useContext(InputRangeContext);
  return { minInputValue, maxInputValue };
};

export const useInputRangeSetter = () => {
  const { setMinInputValue, setMaxInputValue } = useContext(InputRangeSetterContext);
  return { setMinInputValue, setMaxInputValue };
};
