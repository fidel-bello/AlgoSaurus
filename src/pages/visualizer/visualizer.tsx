/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { BiStopCircle } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";
import BubbleSortGraph from "../../components/graphs/bubleSortGraph";
import DefaultGraph from "../../components/graphs/defaultGraph";
import HeapSortGraph from "../../components/graphs/heapSortGraph";
import InsertionSortGraph from "../../components/graphs/insertionSortGraph";
import MergeSortGraph from "../../components/graphs/mergeSortGraph";
import QuickSortGraph from "../../components/graphs/quickSortGraph";
import SelectionSortGraph from "../../components/graphs/selectionSortGraph";
import ShellSortGraph from "../../components/graphs/shellSortGraph";
import { generateRandomArray } from "../../helpers/functions/helperFunctions";
import ReturnCorrectInfo from "./components/returnCorrectInfo";
import SelectAlgorithm from "./components/selectAlgorithm";
import styles from "./visualizer.module.css";
import { motion } from "framer-motion";

const Visualizer = (): JSX.Element | null => {
  const [data, setData] = useState<number[] | null>(null);
  const [currentAlgo, setCurrentAlgo] = useState<
    "Bubble" | "Insertion" | "Selection" | "Quick" | "Heap" | "Merge" | "Shell"
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
    } else if (currentAlgo === "Shell") {
      setData(generateRandomArray({ total: size || 100, min: 0, max: 100 }));
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

  useEffect(() => {
    if (currentAlgo === "Bubble") {
      setSize(30);
    } else if (currentAlgo === "Insertion") {
      setSize(30);
    } else if (currentAlgo === "Selection") {
      setSize(50);
    } else if (currentAlgo === "Quick") {
      setSize(300);
    } else if (currentAlgo === "Merge") {
      setSize(200);
    } else if (currentAlgo === "Heap") {
      setSize(200);
    } else if (currentAlgo === "Shell") {
      setSize(100);
    }
  }, [currentAlgo]);

  const returnCorrectGraph = () => {
    const graphProps = {
      isAlgorithmRunning,
      setIsAlgorithmRunning,
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
    } else if (currentAlgo === "Shell") {
      return <ShellSortGraph {...graphProps} />;
    }
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={styles.container}
    >
      <div className={styles.graph_container}>
        {isAlgorithmRunning ? (
          returnCorrectGraph()
        ) : (
          <DefaultGraph data={data} isAlgorithmRunning={isAlgorithmRunning} />
        )}
      </div>

      <div className={styles.menu_container}>
        <div className={styles.dropdown_play_button_container}>
          <SelectAlgorithm setCurrentAlgo={setCurrentAlgo} />
          <div className={styles.buttonContainer}>
            {!isAlgorithmRunning ? (
              <div className={styles.play_button_container}>
                <button onClick={() => setIsAlgorithmRunning(true)}>
                  <BsPlayFill className={styles.playButton} />
                </button>
                <span className={styles.label}>Start</span>
              </div>
            ) : (
              <div className={styles.play_button_container}>
                <button onClick={() => setIsAlgorithmRunning(false)}>
                  <BiStopCircle className={styles.playButton} />
                </button>
                <span className={styles.label}>Stop</span>
              </div>
            )}
          </div>
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
            value={size || 30}
            type="range"
            min={30}
            max={300}
            step={1}
          />
          <span>{size} (size)</span>
        </div>
      </div>
      <br></br>
      <ReturnCorrectInfo currentAlgo={currentAlgo} />
    </motion.div>
  );
};

export default Visualizer;
