import React from 'react';
import styled from 'styled-components';

import theme from './theme';

function WeekDay() {
  return (
    <S.WeekDay>
      <S.Row>
        <S.Cell>일</S.Cell>
        <S.Cell>월</S.Cell>
        <S.Cell>화</S.Cell>
        <S.Cell>수</S.Cell>
        <S.Cell>목</S.Cell>
        <S.Cell>금</S.Cell>
        <S.Cell>토</S.Cell>
      </S.Row>
    </S.WeekDay>
  );
}

const S = {
  Cell: styled.th`
    color: ${theme.color.gray4};
    font-weight: normal;
  `,

  Row: styled.tr`
    height: 24px;
  `,

  WeekDay: styled.thead`
    padding: 0;
  `,
};

export default WeekDay;
