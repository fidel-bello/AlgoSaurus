import React from "react";
import { insertionSnippets } from "./codeSnippets/insertion";
import styles from "./info.module.css";
import SnippetsLanguages from "./snippetsLanguages/snippetsLanguages";
import TimeComplexity from "./timeComplexity/timeComplexity";

const InsertionInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Insertion Sort</h2>
      <SnippetsLanguages snippets={insertionSnippets} />
      <TimeComplexity best="O(n)" worst="O(n2)" average="O(n2)" stable="YES" />
      <h2 className={styles.header}>How it works?</h2>

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
