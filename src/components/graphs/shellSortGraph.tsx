/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { VictoryBar } from "victory";
import { insertionSort } from "../../helpers/algorithms/sorting/insertionSort";
import { shellSort } from "../../helpers/algorithms/sorting/shellSort";
import { AlgoGraphInterface } from "../../helpers/interfaces/algoGraphInterface";

import styles from "./graph.module.css";

const ShellSortGraph = ({
  isAlgorithmRunning,
  data,
  delay,
  setIsAlgorithmRunning,
}: AlgoGraphInterface): JSX.Element | null => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentIndex2, setCurrentIndex2] = useState<number | null>(0);
  const [currentIndex3, setCurrentIndex3] = useState<number | null>(0);

  const [dataSet, setDataSet] = useState(data);

  useEffect(() => {
    if (!isAlgorithmRunning) return;
    if (!dataSet) return;

    shellSort({
      dataSet,
      setCurrentIndex,
      setDataSet,
      delay,
      setIsAlgorithmRunning,
      setCurrentIndex2,
      setCurrentIndex3,
    });
  }, [isAlgorithmRunning]);

  if (!dataSet) return null;

  return (
    <div className={styles.container}>
      <div className={styles.graph_container}>
        <VictoryBar
          width={1000}
          height={500}
          style={{
            data: {
              fill: ({ index }) =>
                index === currentIndex ||
                index === currentIndex2 ||
                index === currentIndex3
                  ? "red"
                  : "rgb(70,70,70)",
            },
          }}
          data={dataSet}
        />
      </div>
    </div>
  );
};

export default ShellSortGraph;
