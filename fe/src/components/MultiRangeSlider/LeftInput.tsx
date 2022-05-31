import { useCallback, useContext, useRef } from 'react';

import {
  InputRangeContext,
  InputRangeSetterContext,
} from '@/components/MultiRangeSlider/context/InputRange';

import * as S from './style';

import { PriceRangeType } from '.';

function LeftInput({ minPrice, maxPrice }: PriceRangeType) {
  const { minInputValue, maxInputValue } = useContext(InputRangeContext);
  const { setMinInputValue } = useContext(InputRangeSetterContext);
  const minInputValueRef = useRef(null);

  const handleLeftSliderThumb = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setMinInputValue(Math.min(+event.target.value, maxInputValue - 1));
    },
    [minInputValue],
  );

  return (
    <S.Input
      min={minPrice}
      max={maxPrice}
      value={minInputValue}
      ref={minInputValueRef}
      className="thumb zindex-3"
      onChange={handleLeftSliderThumb}
    />
  );
}

export default LeftInput;
