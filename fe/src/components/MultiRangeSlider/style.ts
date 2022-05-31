import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

export const MultiRangeSlider = styled.div`
  ${mixin.flexbox({ jc: 'center', ai: 'center' })};
  position: apsolute;
  width: 200px;
  z-index: 1;
`;

export const Input = styled.input.attrs(() => ({ type: 'range' }))`
  -webkit-appearance: none;
  -webkit-tap-hightlight-color: transparent;
  pointer-events: none;
  position: absolute;
  width: 200px;
  height: 5px;
  outline: none;
  background: ${({ theme }) => theme.color.gray6};

  .zindex-3 {
    z-index: 3;
  }

  .zindex-4 {
    z-index: 4;
  }

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
