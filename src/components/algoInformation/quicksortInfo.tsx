import React from "react";
import styles from "./info.module.css";

const QuicksortInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Quick Sort</h2>
      <p>
        Quicksort is a fast sorting algorithm that works by splitting a large
        array of data into smaller sub-arrays. This implies that each iteration
        works by splitting the input into two components, sorting them, and then
        recombining them. For big datasets, the technique is highly efficient.
      </p>
      <p>
        It works by recursively sorting the sub-lists to either side of a given
        pivot and dynamically shifting elements inside the list around that
        pivot.
      </p>
      <p>
        Some of the key benefits of quick sort is that it works rapidly and
        effectively and it has the best time complexity when compared to other
        sorting algorithms.
      </p>
    </div>
  );
};

export default QuicksortInfo;
