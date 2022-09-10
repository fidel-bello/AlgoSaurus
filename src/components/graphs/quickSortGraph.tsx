/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { VictoryBar } from "victory";
import { quickSort } from "../../helpers/algorithms/sorting/quickSort";

import styles from "./graph.module.css";

interface Props {
  isAlgorithmRunning: boolean;
  data: number[] | null;
  delay: number;
}

const QuickSortGraph = ({
  isAlgorithmRunning,
  data,
  delay,
}: Props): JSX.Element | null => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentIndex2, setCurrentIndex2] = useState<number | null>(0);
  const [dataSet, setDataSet] = useState(data);

  useEffect(() => {
    if (!isAlgorithmRunning) return;
    if (!dataSet) return;

    quickSort({
      dataSet,
      setCurrentIndex,
      setDataSet,
      setCurrentIndex2,
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
                index === currentIndex || index === currentIndex2
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

export default QuickSortGraph;
