/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import BubbleSortGraph from "../../components/graphs/bubleSortGraph";
import styles from "./home.module.css";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { generateRandomArray } from "../../helpers/functions/helperFunctions";
import InsertionSortGraph from "../../components/graphs/insertionSortGraph";
import SelectionSortGraph from "../../components/graphs/selectionSortGraph";
import QuickSortGraph from "../../components/graphs/quickSortGraph";
import HeapSortGraph from "../../components/graphs/heapSortGraph";
import MergeSortGraph from "../../components/graphs/mergeSortGraph";
import DefaultGraph from "../../components/graphs/defaultGraph";
import SelectAlgorithm from "./components/selectAlgorithm";

const HomePage = (): JSX.Element | null => {
  const [data, setData] = useState<number[] | null>(null);
  const [currentAlgo, setCurrentAlgo] = useState<
    "Bubble" | "Insertion" | "Selection" | "Quick" | "Heap" | "Merge"
  >("Bubble");
  const [isAlgorithmRunning, setIsAlgorithmRunning] = useState(false);

  useEffect(() => {
    if (!isAlgorithmRunning) generateArray();
  }, [isAlgorithmRunning]);

  const generateArray = () => {
    if (currentAlgo === "Bubble") {
      setData(generateRandomArray({ total: 30, min: 0, max: 100 }));
    } else if (currentAlgo === "Insertion") {
      setData(generateRandomArray({ total: 30, min: 0, max: 100 }));
    } else if (currentAlgo === "Selection") {
      setData(generateRandomArray({ total: 50, min: 0, max: 100 }));
    } else if (currentAlgo === "Quick") {
      setData(generateRandomArray({ total: 300, min: 0, max: 100 }));
    } else if (currentAlgo === "Merge") {
      setData(generateRandomArray({ total: 200, min: 0, max: 100 }));
    } else if (currentAlgo === "Heap") {
      setData(generateRandomArray({ total: 200, min: 0, max: 100 }));
    }
  };

  useEffect(() => {
    setIsAlgorithmRunning(false);

    generateArray();
  }, [currentAlgo]);

  const returnCorrectGraph = () => {
    const graphProps = {
      isAlgorithmRunning,
      data,
    };

    if (currentAlgo === "Bubble") {
      return <BubbleSortGraph {...graphProps} />;
    } else if (currentAlgo === "Insertion") {
      return <InsertionSortGraph {...graphProps} />;
    } else if (currentAlgo === "Selection") {
      return <SelectionSortGraph {...graphProps} />;
    } else if (currentAlgo === "Quick") {
      return <QuickSortGraph {...graphProps} />;
    } else if (currentAlgo === "Heap") {
      return <HeapSortGraph {...graphProps} />;
    } else if (currentAlgo === "Merge") {
      return <MergeSortGraph {...graphProps} />;
    }
  };

  return (
    <div>
      {isAlgorithmRunning ? (
        returnCorrectGraph()
      ) : (
        <DefaultGraph data={data} isAlgorithmRunning={isAlgorithmRunning} />
      )}
      <div></div>
      <SelectAlgorithm setCurrentAlgo={setCurrentAlgo} />
      <div className={styles.buttonContainer}>
        {!isAlgorithmRunning ? (
          <button onClick={() => setIsAlgorithmRunning(true)}>
            <BsPlayFill className={styles.playButton} />
          </button>
        ) : (
          <button onClick={() => setIsAlgorithmRunning(false)}>
            <BsPauseFill className={styles.playButton} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
