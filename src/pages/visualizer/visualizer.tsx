/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import BubbleSortGraph from "../../components/graphs/bubleSortGraph";
import styles from "./visualizer.module.css";
import { BsPlayFill } from "react-icons/bs";
import { BiStopCircle } from "react-icons/bi";
import { generateRandomArray } from "../../helpers/functions/helperFunctions";
import InsertionSortGraph from "../../components/graphs/insertionSortGraph";
import SelectionSortGraph from "../../components/graphs/selectionSortGraph";
import QuickSortGraph from "../../components/graphs/quickSortGraph";
import HeapSortGraph from "../../components/graphs/heapSortGraph";
import MergeSortGraph from "../../components/graphs/mergeSortGraph";
import DefaultGraph from "../../components/graphs/defaultGraph";
import SelectAlgorithm from "./components/selectAlgorithm";
import ReturnCorrectInto from "./components/returnCorrectInfo";

const Visualizer = (): JSX.Element | null => {
  const [data, setData] = useState<number[] | null>(null);
  const [currentAlgo, setCurrentAlgo] = useState<
    "Bubble" | "Insertion" | "Selection" | "Quick" | "Heap" | "Merge"
  >("Bubble");
  const [isAlgorithmRunning, setIsAlgorithmRunning] = useState(false);
  const [delay, setDelay] = useState<number>(100);
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    if (!isAlgorithmRunning) {
      if (size) {
        return generateArray(size);
      }

      generateArray();
    }
  }, [isAlgorithmRunning]);

  const generateArray = (size?: number) => {
    if (currentAlgo === "Bubble") {
      setData(generateRandomArray({ total: size || 30, min: 0, max: 100 }));
    } else if (currentAlgo === "Insertion") {
      setData(generateRandomArray({ total: size || 30, min: 0, max: 100 }));
    } else if (currentAlgo === "Selection") {
      setData(generateRandomArray({ total: size || 50, min: 0, max: 100 }));
    } else if (currentAlgo === "Quick") {
      setData(generateRandomArray({ total: size || 300, min: 0, max: 100 }));
    } else if (currentAlgo === "Merge") {
      setData(generateRandomArray({ total: size || 200, min: 0, max: 100 }));
    } else if (currentAlgo === "Heap") {
      setData(generateRandomArray({ total: size || 200, min: 0, max: 100 }));
    }
  };

  useEffect(() => {
    setIsAlgorithmRunning(false);

    if (size) {
      return generateArray(size);
    }

    generateArray();
  }, [currentAlgo]);

  useEffect(() => {
    if (size) {
      generateArray(size);
    }
  }, [size]);

  const returnCorrectGraph = () => {
    const graphProps = {
      isAlgorithmRunning,
      data,
      delay,
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
    <div className={styles.container}>
      <div className={styles.graph_container}>
        {isAlgorithmRunning ? (
          returnCorrectGraph()
        ) : (
          <DefaultGraph data={data} isAlgorithmRunning={isAlgorithmRunning} />
        )}
      </div>

      <div className={styles.menu_container}>
        <SelectAlgorithm setCurrentAlgo={setCurrentAlgo} />
        <div className={styles.buttonContainer}>
          {!isAlgorithmRunning ? (
            <button onClick={() => setIsAlgorithmRunning(true)}>
              <BsPlayFill className={styles.playButton} />
            </button>
          ) : (
            <button onClick={() => setIsAlgorithmRunning(false)}>
              <BiStopCircle className={styles.playButton} />
            </button>
          )}
        </div>
        <div className={styles.slider_container}>
          <input
            onChange={(e) => {
              // @ts-ignore
              setDelay(e.target.value);
              setIsAlgorithmRunning(false);
            }}
            type="range"
            min={1}
            max={200}
            step={1}
          />
          <span>{delay} (delay msec)</span>
        </div>
        <div className={styles.slider_container}>
          <input
            onChange={(e) => {
              // @ts-ignore
              setSize(e.target.value);
              setIsAlgorithmRunning(false);
            }}
            type="range"
            min={30}
            max={300}
            step={1}
          />
          <span>{size} (size)</span>
        </div>
      </div>
      <br></br>
      <ReturnCorrectInto currentAlgo={currentAlgo} />
    </div>
  );
};

export default Visualizer;
