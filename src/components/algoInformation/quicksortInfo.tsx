import React from "react";
import { quickSnippets } from "./codeSnippets/quick";
import styles from "./info.module.css";
import SnippetsLanguages from "./snippetsLanguages/snippetsLanguages";
import TimeComplexity from "./timeComplexity/timeComplexity";

const QuicksortInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Quick Sort</h2>
      <SnippetsLanguages snippets={quickSnippets} />
      <TimeComplexity
        best="O(n*log n)"
        worst="O(n2)"
        average="O(n*log n)"
        stable="NO"
      />
      <h2 className={styles.header}>How it works?</h2>
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
      <h2>Quick Sort application</h2>
      <p>The quick sort is used on:</p>
      <ul className={styles.applications_list}>
        <li>the programming language is good for recursion</li>
        <li>time complexity matters</li>
        <li>space complexity matters</li>
      </ul>
    </div>
  );
};

export default QuicksortInfo;
