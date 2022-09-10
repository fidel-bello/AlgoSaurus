import { sleep } from "../../functions/helperFunctions";
import { AlgoInterface } from "../../interfaces/algoInterface";
//**************************** FIX ME ****************************** */
//**************************** FIX ME ****************************** */
//**************************** FIX ME ****************************** */
export const selectionSort = async ({
  dataSet,
  setCurrentIndex,
  setDataSet,
  delay,
}: AlgoInterface) => {
  if (!dataSet) return null;

  const length = dataSet.length;
  const array = dataSet;

  for (let i = 0; i < length; i++) {
    let minValue = i;

    for (let j = i + 1; j < length; j++) {
      setCurrentIndex(j);

      if (array[j] < array[minValue]) {
        minValue = j;
      }

      await sleep(delay);
    }

    if (minValue != i) {
      // Swapping the elements
      const tmp = array[i];
      array[i] = array[minValue];
      array[minValue] = tmp;
    }

    setDataSet([...array]);

    await sleep(delay);
  }
};
