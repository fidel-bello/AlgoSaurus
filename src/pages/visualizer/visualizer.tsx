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
import ReactSlider from "react-slider";

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
    switch (currentAlgo) {
      case "Bubble":
        setData(generateRandomArray({ total: size || 30, min: 0, max: 100 }));
        break;
      case "Insertion":
        setData(generateRandomArray({ total: size || 50, min: 0, max: 100 }));
        break;
      case "Selection":
        setData(generateRandomArray({ total: size || 50, min: 0, max: 100 }));
        break;
      case "Quick":
        setData(generateRandomArray({ total: size || 300, min: 0, max: 100 }));
        break;
      case "Merge":
        generateRandomArray({ total: size || 200, min: 0, max: 100 });
        break;
      case "Heap":
        generateRandomArray({ total: size || 200, min: 0, max: 100 });
        break;
      case "Shell":
        generateRandomArray({ total: size || 200, min: 0, max: 100 });
        break;
      default:
        break;
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
    switch (currentAlgo){
      case "Bubble":
        setSize(30);
      break;
      case "Selection":
        setSize(30);
        break;
      case "Quick":
        setSize(300);
      break;
      case "Merge":
        setSize(200);
      break;
      case "Heap":
        setSize(200);
        break;
      case "Shell":
        setSize(100);
        break
      default:
        break;
    }
  }, [currentAlgo]);

  const returnCorrectGraph = () => {
    const graphProps = {
      isAlgorithmRunning,
      setIsAlgorithmRunning,
      data,
      delay,
    };

    switch(currentAlgo){
      case "Bubble":
        return <BubbleSortGraph { ...graphProps} />;
      case "Insertion":
        return <InsertionSortGraph {...graphProps} />;
      case "Selection":
        return <SelectionSortGraph {...graphProps} />;
      case "Quick":
        return <QuickSortGraph {...graphProps} />;
      case "Merge":
        return <MergeSortGraph {...graphProps} />;
      case "Heap":
        return <HeapSortGraph { ...graphProps} />;
      case "Shell":
        return <ShellSortGraph {...graphProps} />;
      default:
    }
  };

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const container = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className={styles.container}
    >
      <motion.div className={styles.graph_container}>
        {isAlgorithmRunning ? (
          returnCorrectGraph()
        ) : (
          <DefaultGraph data={data} isAlgorithmRunning={isAlgorithmRunning} />
        )}
      </motion.div>

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
          <ReactSlider
            onChange={(value) => {
              // @ts-ignore
              setDelay(value);
              setIsAlgorithmRunning(false);
            }}
            value={delay}
            min={1}
            max={200}
            step={1}
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
          />

          <span>{delay} (delay msec)</span>
        </div>
        <div className={styles.slider_container}>
          <ReactSlider
            onChange={(value) => {
              // @ts-ignore
              setSize(value);
              setIsAlgorithmRunning(false);
            }}
            value={size || 30}
            min={30}
            max={300}
            step={1}
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
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
