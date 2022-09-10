/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { VictoryBar } from "victory";
import { bubbleSort } from "../../helpers/algorithms/sorting/bubleSort";

import ConfettiComponent from "../confetti/confetti";
import styles from "./graph.module.css";

interface Props {
  isAlgorithmRunning: boolean;
  data: number[] | null;
  generateArray: () => void;
}

const BubbleSortGraph = ({
  isAlgorithmRunning,
  data,

  generateArray,
}: Props): JSX.Element | null => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dataSet, setDataSet] = useState(data);
  // Confetti
  const [isConfettiRunning, setIsConfettiRunning] = useState(false);

  useEffect(() => {
    if (dataSet) {
      generateArray();
    }
  }, [dataSet]);

  useEffect(() => {
    if (!isAlgorithmRunning) return;
    if (!dataSet) return;

    bubbleSort({
      setIsConfettiRunning,
      dataSet,
      setCurrentIndex,
      setDataSet,
      delay: 10,
      isAlgorithmRunning,
    });
  }, [isAlgorithmRunning]);

  if (!dataSet) return null;

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
