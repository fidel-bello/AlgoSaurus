import { swapElements } from "./../../functions/helperFunctions";
import { AlgoInterface } from "../../interfaces/algoInterface";
import { sleep } from "../../functions/helperFunctions";

export const bubbleSort = async ({
  dataSet,
  setCurrentIndex,
  setDataSet,
  delay,
  setIsConfettiRunning,
}: AlgoInterface) => {
  if (!dataSet) return null;

  const length = dataSet.length;

  const array = dataSet;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      setCurrentIndex(j);

      if (array[j] > array[j + 1]) {
        swapElements(array, j, j + 1);
      }

      setDataSet([...array]);

      await sleep(delay);
    }
  }

  if (setIsConfettiRunning) setIsConfettiRunning(true);
};
