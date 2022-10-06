import React from "react";
import styles from "./timeComplexity.module.css";

interface Props {
  best: string;
  worst: string;
  average: string;
  stable: string;
}

const TimeComplexity = ({
  best,
  worst,
  average,
  stable,
}: Props): JSX.Element => {
  return (
    <div>
      <h2 className={styles.header}>Time Complexity</h2>
      <table className={styles.table}>
        <tr>
          <th>Best</th>
          <th>Worst</th>
          <th>Average</th>
          <th>Stable</th>
        </tr>
        <tr>
          <td>{best}</td>
          <td>{worst}</td>
          <td>{average}</td>
          <td>{stable}</td>
        </tr>
      </table>
    </div>
  );
};

export default TimeComplexity;
