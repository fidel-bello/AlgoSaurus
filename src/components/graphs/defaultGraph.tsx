/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { VictoryBar } from "victory";

import styles from "./graph.module.css";

interface Props {
  isAlgorithmRunning: boolean;
  data: number[] | null;
}

const DefaultGraph = ({ data }: Props): JSX.Element | null => {
  if (!data) return null;

  return (
    <div className={styles.container}>
      <div className={styles.graph_container}>
        <VictoryBar width={1000} height={500} data={data} />
      </div>
    </div>
  );
};

export default DefaultGraph;
