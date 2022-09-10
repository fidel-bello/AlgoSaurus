import React from "react";
import styles from "./info.module.css";

const InsertionInfo = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ margin: "10px 0px" }}>Insertion Sort Simplified</h1>
      <p>
        Insertion sort is a simple sorting algorithm that works similar to the
        way you sort playing cards in your hands. The array is virtually split
        into a sorted and an unsorted part. Values from the unsorted part are
        picked and placed at the correct position in the sorted part.
      </p>
      <p>
        This algorithm is one of the simplest algorithm with simple
        implementation. Basically, insertion sort is efficient for small data
        values. Insertion sort is adaptive in nature, i.e. it is appropriate for
        data sets which are already partially sorted.
      </p>
    </div>
  );
};

export default InsertionInfo;
