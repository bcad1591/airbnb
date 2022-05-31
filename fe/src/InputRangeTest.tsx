import MultiRangeSlider from '@/components/MultiRangeSlider';
import { InputRangeProvider } from '@/components/MultiRangeSlider/context/InputRange';

interface InputRangeProps {
  minPrice: number;
  maxPrice: number;
}

function InputRangeTest({ minPrice, maxPrice }: InputRangeProps) {
  return (
    <>
      <div style={{ width: 150, height: 150 }}>test</div>
      <InputRangeProvider minPrice={minPrice} maxPrice={maxPrice}>
        <MultiRangeSlider minPrice={minPrice} maxPrice={maxPrice} />
      </InputRangeProvider>
    </>
  );
}

export default InputRangeTest;
