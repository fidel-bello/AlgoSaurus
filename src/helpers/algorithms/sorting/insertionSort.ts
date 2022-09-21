import { sleep } from "../../functions/helperFunctions";
import { AlgoInterface } from "../../interfaces/algoInterface";

export const insertionSort = async ({
  dataSet,
  setCurrentIndex,
  setDataSet,
  delay,
}: AlgoInterface) => {
  if (!dataSet) return null;

  const length = dataSet.length;
  const array = dataSet;

  for (let i = 0; i < length; i++) {
    const current = array[i];
    let j = i - 1;

    while (j > -1 && current < array[j]) {
      setCurrentIndex(j);

      array[j + 1] = array[j];
      j--;
      await sleep(delay);
    }
    array[j + 1] = current;

    setDataSet([...array]);

    await sleep(delay);
  }

  // setIsAlgorithmRunning(false);
};
