/* eslint-disable @typescript-eslint/ban-ts-comment */
import { sleep } from "../../functions/helperFunctions";
import { AlgoInterface } from "../../interfaces/algoInterface";
import { swapElements } from "./../../functions/helperFunctions";

export const bubbleSort = async ({
  dataSet,
  setCurrentIndex,
  setDataSet,
  delay,
  setIsConfettiRunning,
  setIsAlgorithmRunning,
}: AlgoInterface) => {
  if (!dataSet) return null;

  let increment = dataSet.length / 2;
  const arr = dataSet;

  while (increment > 0) {
    for (let i = increment; i < arr.length; i++) {
      let j = i;
      const temp = arr[i];

      while (j >= increment && arr[j - increment] > temp) {
        arr[j] = dataSet[j - increment];
        j = j - increment;
      }

      arr[j] = temp;
    }

    if (increment == 2) {
      increment = 1;
    } else {
      // @ts-ignore
      increment = parseInt((increment * 5) / 11);
    }
  }

  setDataSet([...arr]);
  // setIsAlgorithmRunning(false);
};
