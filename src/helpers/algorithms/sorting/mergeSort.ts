import { sleep } from "../../functions/helperFunctions";
import { AlgoInterface } from "../../interfaces/algoInterface";

export const mergeSort = async ({
  dataSet,
  setCurrentIndex,
  setCurrentIndex2,
  setCurrentIndex3,
  setDataSet,
  delay,
}: AlgoInterface) => {
  if (!dataSet) return null;
  if (!setCurrentIndex2) return null;
  if (!setCurrentIndex3) return null;

  const length = dataSet.length;
  const array = dataSet;

  const temp: number[] = [];
  const front = 0;
  const back = length - 1;

  const divide = async (
    array: number[],

    temp: number[],
    front: number,
    end: number
  ) => {
    if (front < end) {
      const mid = Math.floor((end + front) / 2);
      await divide(array, temp, front, mid);

      await divide(array, temp, mid + 1, end);

      await merge(array, temp, front, mid, end);
    }
  };
  const merge = async (
    array: number[],
    temp: number[],
    start: number,
    mid: number,
    end: number
  ) => {
    const sorted = [];
    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
      if (array[i] <= array[j]) {
        sorted.push(array[i++]);
        setCurrentIndex(i);
        setCurrentIndex2(j);
        setCurrentIndex3(end);
      } else {
        sorted.push(array[j++]);
        setCurrentIndex2(j);
      }

      await sleep(delay);
    }

    while (i <= mid) {
      sorted.push(array[i++]);

      setCurrentIndex(i);
      setCurrentIndex2(j);

      await sleep(delay);
    }

    while (j <= end) {
      sorted.push(array[j++]);

      setCurrentIndex(i);
      setCurrentIndex2(j);

      await sleep(delay);
    }

    const indexes = [];
    for (let i = start; i <= end; ++i) {
      indexes.push(i);
    }

    for (let i = start; i <= end; ++i) {
      array[i] = sorted[i - start];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment
      // @ts-ignore
      temp.push([i, array[i], indexes]);

      setCurrentIndex(i);
      setCurrentIndex2(j);

      await sleep(delay);
    }

    setCurrentIndex(i);
    setCurrentIndex2(j);
  };

  await divide(array, temp, front, back);
  setDataSet([...array]);

  // setIsAlgorithmRunning(false);
  return temp;
};
