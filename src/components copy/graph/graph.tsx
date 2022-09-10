import React, { useEffect, useState } from "react";
import { generateRandomArray } from "../../helpers/functions/helperFunctions";
import styles from "./graph.module.css";

import { VictoryBar } from "victory";
import { bubbleSort } from "../../helpers/algorithms/bubleSort";
import { selectionSort } from "../../helpers/algorithms/selectionSort";
import { insertionSort } from "../../helpers/algorithms/insertionSort";
import { quickSort } from "../../helpers/algorithms/quickSort";
import { heapSort } from "../../helpers/algorithms/heapSort";
import { mergeSort } from "../../helpers/algorithms/mergeSort";
import ConfettiComponent from "../confetti/confetti";

const Graph = (): JSX.Element | null => {
  const [dataSet, setDataSet] = useState<number[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentIndex2, setCurrentIndex2] = useState<number | null>(null);
  const [currentIndex3, setCurrentIndex3] = useState<number | null>(null);

  // Confetti
  const [runConfetti, setRunConfetti] = useState<boolean>(false);

  console.log(runConfetti);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    setDataSet(generateRandomArray({ total: 30, min: 0, max: 100 }));
  };

  if (!dataSet) return null;

  return (
    <div className={styles.container}>
      <ConfettiComponent
        setRunConfetti={setRunConfetti}
        runConfetti={runConfetti}
      />
      <div className={styles.graph_container}>
        <VictoryBar
          width={1000}
          height={500}
          style={{
            data: {
              fill: ({ index }) =>
                index === currentIndex || index === currentIndex2
                  ? "red"
                  : "rgb(70,70,70)",
            },
          }}
          data={dataSet}
        />
        <>
          <button
            onClick={() => {
              bubbleSort({
                dataSet,
                setCurrentIndex,
                setDataSet,
                delay: 10,
                setRunConfetti,
              });
            }}
          >
            Bubble Sort
          </button>
          <button
            onClick={() =>
              insertionSort({
                dataSet,
                setCurrentIndex,
                setDataSet,
                delay: 10,
              })
            }
          >
            Insertion Sort
          </button>
          <button
            onClick={() =>
              selectionSort({
                dataSet,
                setCurrentIndex,
                setDataSet,
                delay: 10,
              })
            }
          >
            Selection Sort
          </button>
          <button
            onClick={() =>
              quickSort({
                dataSet,
                setCurrentIndex,
                setCurrentIndex2,
                setDataSet,
                delay: 100,
              })
            }
          >
            Quick Sort
          </button>
          <button
            onClick={() =>
              heapSort({
                dataSet,
                setCurrentIndex,
                setCurrentIndex2,
                setCurrentIndex3,
                setDataSet,
                delay: 1,
              })
            }
          >
            Heap Sort
          </button>
          <button
            onClick={() =>
              mergeSort({
                dataSet,
                setCurrentIndex,
                setCurrentIndex2,
                setDataSet,
                delay: 20,
              })
            }
          >
            Merge Sort
          </button>
        </>
      </div>
    </div>
  );
};

export default Graph;
