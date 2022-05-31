import { createContext, useEffect, useMemo, useRef, useState } from 'react';

import * as S from './style';

interface Props {
  minPrice: number;
  maxPrice: number;
}

interface InputRangeContextType {
  leftInputValue: number;
  rightInputValue: number;
  setLeftInputValue: React.Dispatch<React.SetStateAction<number>>;
  setRightInputValue: React.Dispatch<React.SetStateAction<number>>;
}

export const InputRangeContext = createContext<InputRangeContextType | null>(null);

function MultiRangeSlider({ minPrice, maxPrice }: Props) {
  const [leftInputValue, setLeftInputValue] = useState(minPrice);
  const [rightInputValue, setRightInputValue] = useState(maxPrice);
  const leftInputValueRef = useRef(null);
  const rightInputValueRef = useRef(null);
  const inputRange = useMemo(() => {
    return { leftInputValue, rightInputValue, setLeftInputValue, setRightInputValue };
  }, [leftInputValue, rightInputValue]);

  const handleLeftSliderThumb = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Math.min(+event.target.value, rightInputValue - 1);
    setLeftInputValue(value);
  };

  const handleRightSliderThumb = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Math.max(+event.target.value, leftInputValue + 1);
    setRightInputValue(value);
  };

  useEffect(() => {
    console.log(`leftInputValue: ${leftInputValue} rightInputValue: ${rightInputValue}`);
  }, [leftInputValue, rightInputValue]);

  return (
    <S.MultiRangeSlider>
      <InputRangeContext.Provider value={inputRange}>
        <S.Input
          min={minPrice}
          max={maxPrice}
          value={leftInputValue}
          ref={leftInputValueRef}
          className="thumb"
          onChange={handleLeftSliderThumb}
        />
        <S.Input
          min={minPrice}
          max={maxPrice}
          value={rightInputValue}
          ref={rightInputValueRef}
          className="thumb"
          onChange={handleRightSliderThumb}
        />
      </InputRangeContext.Provider>
    </S.MultiRangeSlider>
  );
}

export default MultiRangeSlider;
