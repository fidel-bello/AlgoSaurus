import { sleep, swapElements } from "../../functions/helperFunctions";
import { AlgoInterface } from "../../interfaces/algoInterface";
//**************************** FIX ME ****************************** */
//**************************** FIX ME ****************************** */
//**************************** FIX ME ****************************** */
export const heapSort = async ({
  dataSet,
  setDataSet,
  setCurrentIndex,
  setCurrentIndex2,
  setCurrentIndex3,
  delay,
}: AlgoInterface) => {
  if (!dataSet) return null;
  if (!setCurrentIndex2) return null;
  if (!setCurrentIndex3) return null;

  const length = dataSet.length;
  const array = dataSet;
  const moves: any = [];

  const heapify = async (
    temp: any[],
    array: number[],
    length: number,
    index: number
  ) => {
    await sleep(delay);
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    setCurrentIndex(index);

    if (left < length && array[left] > array[largest]) {
      largest = left;

      setCurrentIndex2(largest);

      await sleep(delay);
    }

    if (right < length && array[right] > array[largest]) {
      largest = right;
      setCurrentIndex3(largest);

      await sleep(delay);
    }

    if (largest !== index) {
      temp.push([index, largest]);
      swapElements(array, index, largest);
      setCurrentIndex(index);

      await heapify(temp, array, length, largest);
    }
  };

  for (let i = Math.ceil(length / 2) - 1; i >= 0; --i) {
    await heapify(moves, array, length, i);
  }

  for (let index = length - 1; index >= 0; --index) {
    setCurrentIndex(index + 1);
    await sleep(delay);

    moves.push([index, 0]);
    swapElements(array, index, 0);
    await heapify(moves, array, index, 0);
  }
  setDataSet([...array]);
  return moves;
};
