import React from "react";
import { heapSnippets } from "./codeSnippets/heap";
import styles from "./info.module.css";
import SnippetsLanguages from "./snippetsLanguages/snippetsLanguages";
import TimeComplexity from "./timeComplexity/timeComplexity";

const HeapInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Heap Sort</h2>
      <SnippetsLanguages snippets={heapSnippets} />
      <TimeComplexity
        best="O(nlog n)"
        worst="O(nlog n)"
        average="O(nlog n)"
        stable="NO"
      />

      <h2 className={styles.header}>How it works?</h2>
      <p>
        Heap sort is a comparison-based sorting technique and it is similar to
        the selection sort where we first find the minimum element and place the
        minimum element at the beginning. Repeat the same process for the
        remaining elements.
      </p>
      <p>
        Heap sort is typically 2-3 times slower than well-implemented QuickSort.
        The reason for slowness is a lack of locality of reference.
      </p>
      <h2 className={styles.header}>Benefits of Heap Sort</h2>
      <ul>
        <li>
          <strong>Efficiency - </strong>The time required to perform Heap sort
          increases logarithmically while other algorithms may grow
          exponentially slower as the number of items to sort increases. This
          sorting algorithm is very efficient.
        </li>
        <li>
          <strong>Memory Usage - </strong>Memory usage is minimal because apart
          from what is necessary to hold the initial list of items to be sorted,
          it needs no additional memory space to work
        </li>
        <li>
          <strong>Simplicity - </strong>It is simpler to understand than other
          equally efficient sorting algorithms.
        </li>
      </ul>
    </div>
  );
};

export default HeapInfo;
