/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { VictoryBar } from "victory";
import { insertionSort } from "../../helpers/algorithms/sorting/insertionSort";
import { AlgoGraphInterface } from "../../helpers/interfaces/algoGraphInterface";

import styles from "./graph.module.css";

const InsertionSortGraph = ({
  isAlgorithmRunning,
  data,
  delay,
  setIsAlgorithmRunning,
}: AlgoGraphInterface): JSX.Element | null => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dataSet, setDataSet] = useState(data);

  useEffect(() => {
    if (!isAlgorithmRunning) return;
    if (!dataSet) return;

    insertionSort({
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

export default InsertionSortGraph;
