import LeftInput from './LeftInput';
import RightInput from './RightInput';
import * as S from './style';

export interface PriceRangeType {
  minPrice: number;
  maxPrice: number;
}

function MultiRangeSlider({ minPrice, maxPrice }: PriceRangeType) {
  return (
    <S.MultiRangeSlider>
      <LeftInput minPrice={minPrice} maxPrice={maxPrice} />
      <RightInput minPrice={minPrice} maxPrice={maxPrice} />
    </S.MultiRangeSlider>
  );
}

export default MultiRangeSlider;
