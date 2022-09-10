/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { VictoryBar } from "victory";
import { mergeSort } from "../../helpers/algorithms/sorting/mergeSort";

import styles from "./graph.module.css";

interface Props {
  isAlgorithmRunning: boolean;
  data: number[] | null;
}

const MergeSortGraph = ({
  isAlgorithmRunning,
  data,
}: Props): JSX.Element | null => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentIndex2, setCurrentIndex2] = useState<number | null>(0);
  const [currentIndex3, setCurrentIndex3] = useState<number | null>(0);
  const [dataSet, setDataSet] = useState(data);

  useEffect(() => {
    if (!isAlgorithmRunning) return;
    if (!dataSet) return;

    mergeSort({
      dataSet,
      setDataSet,
      setCurrentIndex,
      setCurrentIndex2,
      setCurrentIndex3,
      delay: 1,
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

export default MergeSortGraph;
