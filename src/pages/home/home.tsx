/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import BubbleSortGraph from "../../components/graphs/bubleSortGraph";
import styles from "./home.module.css";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { VictoryBar } from "victory";
import { generateRandomArray } from "../../helpers/functions/helperFunctions";

const HomePage = (): JSX.Element | null => {
  const [data, setData] = useState<number[] | null>(null);
  const [currentAlgo, setCurrentAlgo] = useState<
    "Bubble" | "Insertion" | "Selection" | "Quick" | "Heap" | "Merge"
  >("Bubble");
  const [isAlgorithmRunning, setIsAlgorithmRunning] = useState(false);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    setData(generateRandomArray({ total: 100, min: 0, max: 100 }));
  };

  const returnCorrectGraph = () => {
    if (currentAlgo === "Bubble")
      return (
        <BubbleSortGraph
          isAlgorithmRunning={isAlgorithmRunning}
          data={data}
          generateArray={generateArray}
        />
      );
  };

  if (!isAlgorithmRunning) {
    if (!data) return null;

    return (
      <div>
        <VictoryBar width={1000} height={500} data={data} />
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
  }

  return (
    <div>
      {returnCorrectGraph()}
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
