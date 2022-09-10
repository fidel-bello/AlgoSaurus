/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { VictoryBar } from "victory";
import { bubbleSort } from "../../helpers/algorithms/sorting/bubleSort";
import { heapSort } from "../../helpers/algorithms/sorting/heapSort";
import { insertionSort } from "../../helpers/algorithms/sorting/insertionSort";
import { mergeSort } from "../../helpers/algorithms/sorting/mergeSort";
import { quickSort } from "../../helpers/algorithms/sorting/quickSort";
import { selectionSort } from "../../helpers/algorithms/sorting/selectionSort";

import { generateRandomArray } from "../../helpers/functions/helperFunctions";
import ConfettiComponent from "../confetti/confetti";
import styles from "./graph.module.css";

const Graph = (): JSX.Element | null => {
  const [dataSet, setDataSet] = useState<number[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentIndex2, setCurrentIndex2] = useState<number | null>(null);
  const [currentIndex3, setCurrentIndex3] = useState<number | null>(null);
  const [currentAlgo, setCurrentAlgo] = useState<
    "Bubble" | "Insertion" | "Selection" | "Quick" | "Heap" | "Merge"
  >("Bubble");

  // Confetti
  const [runConfetti, setRunConfetti] = useState<boolean>(false);
  const [isConfettiRunning, setIsConfettiRunning] = useState(false);

  useEffect(() => {
    generateArray();
    setCurrentAlgo("Bubble");
  }, []);

  const generateArray = () => {
    setDataSet(generateRandomArray({ total: 30, min: 0, max: 100 }));
  };

  if (!dataSet) return null;

  const handleClick = () => {
    switch (currentAlgo) {
      case "Bubble":
        bubbleSort({
          setIsConfettiRunning,
          dataSet,
          setCurrentIndex,
          setDataSet,
          delay: 10,
        });
        break;
      case "Insertion":
        insertionSort({
          dataSet,
          setCurrentIndex,
          setDataSet,
          delay: 10,
        });
        break;
      case "Selection":
        selectionSort({
          dataSet,
          setCurrentIndex,
          setDataSet,
          delay: 10,
        });
        break;
      case "Quick":
        quickSort({
          dataSet,
          setCurrentIndex,
          setCurrentIndex2,
          setDataSet,
          delay: 10,
        });
        console.log("went into quick sort");
        break;
      case "Heap":
        heapSort({
          dataSet,
          setCurrentIndex,
          setCurrentIndex2,
          setCurrentIndex3,
          setDataSet,
          delay: 1,
        });
        break;
      case "Merge":
        mergeSort({
          dataSet,
          setCurrentIndex,
          setCurrentIndex2,
          setCurrentIndex3,
          setDataSet,
          delay: 10,
        });
        break;
      default:
        alert("Error");
    }
  };

  return (
    <div className={styles.container}>
      <ConfettiComponent
        setIsConfettiRunning={setIsConfettiRunning}
        isConfettiRunning={isConfettiRunning}
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
        <select
          onChange={(e) => {
            // @ts-ignore
            setCurrentAlgo(e.target.value);
          }}
        >
          <option value="Bubble">Bubble</option>
          <option value="Insertion">Insertion</option>
          <option value="Selection">Selection</option>
          <option value="Quick">Quick Sort</option>
          <option value="Heap">Heap Sort</option>
          <option value="Merge">Merge Sort</option>
        </select>
        <div className={styles.buttonContainer}>
          {!isConfettiRunning ? (
            <button onClick={handleClick}>
              <BsPlayFill className={styles.playButton} />
            </button>
          ) : (
            <button>
              <BsPauseFill className={styles.playButton} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Graph;