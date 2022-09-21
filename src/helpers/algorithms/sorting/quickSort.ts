/* eslint-disable @typescript-eslint/no-explicit-any */

import { sleep, swapElements } from "../../functions/helperFunctions";
import { AlgoInterface } from "../../interfaces/algoInterface";

export const quickSort = async ({
  dataSet,
  setCurrentIndex,
  setCurrentIndex2,
  setDataSet,
  delay,
}: AlgoInterface) => {
  if (!dataSet) return null;
  if (!setCurrentIndex2) return null;

  const length = dataSet.length;
  const array = dataSet;
  const moves: any = [];
  const curr = 0;
  const end = length - 1;

  const divider = async (
    moves: any[],
    array: any,
    start: number,
    end: number
  ) => {
    if (start < end) {
      await sleep(delay);

      const pivot = await partition(moves, array, start, end);
      setCurrentIndex(pivot);
      setCurrentIndex2(end);

      await divider(moves, array, start, pivot - 1);

      await divider(moves, array, pivot + 1, end);
      setDataSet([...array]);
    }
  };

  await divider(moves, array, curr, end);

  // setIsAlgorithmRunning(false);
};

const partition = async (
  moves: any[],
  array: [],
  start: number,
  end: number
) => {
  let prv = start - 1;
  for (let index = start; index < end; ++index) {
    if (index !== end) {
      moves.push([index, end]);
    }
    if (array[index] < array[end]) {
      ++prv;
      swapElements(array, index, prv);
      moves.push([index, prv]);
    }
  }

  swapElements(array, prv + 1, end);
  moves.push([end, prv + 1]);
  return prv + 1;
};
