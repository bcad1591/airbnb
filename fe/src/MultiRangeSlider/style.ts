import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

export const MultiRangeSlider = styled.div`
  position: absolute;
  ${mixin.flexbox({ jc: 'center', ai: 'center' })};
  height: 100px;
`;

export const Input = styled.input.attrs(() => ({ type: 'range' }))`
  -webkit-appearance: none;
  -webkit-tap-hightlight-color: transparent;
  pointer-events: none;
  position: absolute;
  width: 200px;
  height: 10px;
  outline: none;
  background: ${({ theme }) => theme.color.gray6};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    pointer-events: all;
    height: 24px;
    width: 24px;
    border: none;
    background: url('./sliderThumb.svg');
    cursor: pointer;
    z-index: 5;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-moz-range-thumb {
    position: relative;
    pointer-events: all;
    height: 20px;
    width: 20px;
    border: none;
    background: ${({ theme }) => theme.color.gray1};
    cursor: pointer;
    z-index: 5;
  }

  &::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

export const Slider = styled.div`
  position: relative;
  width: 200px;
`;

export const SliderTrack = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: #ced4da;
  z-index: 1;
`;
