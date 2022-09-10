/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { VictoryBar } from "victory";
import { bubbleSort } from "../../helpers/algorithms/sorting/bubleSort";
import { selectionSort } from "../../helpers/algorithms/sorting/selectionSort";

import styles from "./graph.module.css";

interface Props {
  isAlgorithmRunning: boolean;
  data: number[] | null;
  delay: number;
}

const SelectionSortGraph = ({
  isAlgorithmRunning,
  data,
  delay,
}: Props): JSX.Element | null => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dataSet, setDataSet] = useState(data);

  useEffect(() => {
    if (!isAlgorithmRunning) return;
    if (!dataSet) return;

    selectionSort({
      dataSet,
      setCurrentIndex,
      setDataSet,
      delay,
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

export default SelectionSortGraph;
