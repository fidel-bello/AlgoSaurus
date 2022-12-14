/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { VictoryBar } from "victory";
import { bubbleSort } from "../../helpers/algorithms/sorting/bubleSort";
import { AlgoGraphInterface } from "../../helpers/interfaces/algoGraphInterface";
import ConfettiComponent from "../confetti/confetti";
import styles from "./graph.module.css";

const BubbleSortGraph = ({
  isAlgorithmRunning,
  setIsAlgorithmRunning,
  data,
  delay,
}: AlgoGraphInterface): JSX.Element | null => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dataSet, setDataSet] = useState(data);
  // Confetti
  const [isConfettiRunning, setIsConfettiRunning] = useState(false);

  useEffect(() => {
    if (!isAlgorithmRunning) return;
    if (!dataSet) return;

    bubbleSort({
      setIsConfettiRunning,
      dataSet,
      setCurrentIndex,
      setDataSet,
      delay,
      setIsAlgorithmRunning,
    });
  }, [isAlgorithmRunning]);

  if (!dataSet) return null;

  return (
    <div className={styles.container}>
      <div className={styles.confetti_container}>
        <ConfettiComponent
          setIsConfettiRunning={setIsConfettiRunning}
          isConfettiRunning={isConfettiRunning}
        />
      </div>

      <div className={styles.graph_container}>
        <VictoryBar
          width={1000}
          height={500}
          style={{
            data: {
              fill: ({ index }) =>
                index === currentIndex ? "red" : "rgb(70,70,70)",
            },
          }}
          data={dataSet}
        />
      </div>
    </div>
  );
};

export default BubbleSortGraph;
