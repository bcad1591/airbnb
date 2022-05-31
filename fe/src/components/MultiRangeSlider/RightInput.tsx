import { useCallback, useContext, useRef } from 'react';

import {
  InputRangeContext,
  InputRangeSetterContext,
} from '@/components/MultiRangeSlider/context/InputRange';

import * as S from './style';

import { PriceRangeType } from '.';

function RightInput({ minPrice, maxPrice }: PriceRangeType) {
  const { minInputValue, maxInputValue } = useContext(InputRangeContext);
  const { setMaxInputValue } = useContext(InputRangeSetterContext);
  const maxInputValueRef = useRef(null);

  const handleRightSliderThumb = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setMaxInputValue(Math.max(+event.target.value, minInputValue + 1));
    },
    [maxInputValue],
  );

  return (
    <S.Input
      min={minPrice}
      max={maxPrice}
      value={maxInputValue}
      ref={maxInputValueRef}
      className="thumb zindex-4"
      onChange={handleRightSliderThumb}
    />
  );
}

export default RightInput;
