import { endOfMonth, getDay, startOfMonth, getDate } from 'date-fns';

type MonthTableRowType = Array<number | boolean>;

const getRangeArray = (start: number, end: number): number[] => {
  return Array(end - start + 1)
    .fill(undefined)
    .map((_, index) => index + start);
};

const splitArray = (array: MonthTableRowType, part: number): MonthTableRowType[] => {
  const tmp = [];
  for (let i = 0; i < array.length; i += part) {
    tmp.push(array.slice(i, i + part));
  }

  const lastTmpRow = tmp[tmp.length - 1];
  if (lastTmpRow.length < part) {
    const requiredCellCount = part - lastTmpRow.length;
    lastTmpRow.push(...Array(requiredCellCount).fill(false));
  }

  return tmp;
};

// getMonthData
interface IGetMonthData {
  (year: number, month: number): MonthTableRowType[];
}

export const getMonthData: IGetMonthData = (year, month) => {
  if (month < 1 || month > 12) {
    console.error('month must be between 1 and 12');
    return [];
  }

  const date = new Date(year, month - 1);
  const startDay = getDay(startOfMonth(date)); // 요일 index 얻기
  const endDate = getDate(endOfMonth(date)); // 30일 or 31일

  const daysArray = getRangeArray(1, endDate); // [1, 2, ..., 30]
  const spaceArray = Array(startDay).fill(false);
  const targetArray = spaceArray.concat(daysArray);

  return splitArray(targetArray, 7); // 1d -> 2d
};
