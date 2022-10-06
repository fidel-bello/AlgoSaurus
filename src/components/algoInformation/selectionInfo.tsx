import React from "react";
import { selectionSnippets } from "./codeSnippets/selection";
import styles from "./info.module.css";
import SnippetsLanguages from "./snippetsLanguages/snippetsLanguages";
import TimeComplexity from "./timeComplexity/timeComplexity";

const SelectionInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Selection Sort</h2>
      <SnippetsLanguages snippets={selectionSnippets} />
      <TimeComplexity best="O(n2)" worst="O(n2)" average="O(n2)" stable="NO" />
      <h2 className={styles.header}>How it works?</h2>

      <p>
        The selection sort algorithm is a simple, yet effective sorting
        algorithm. A selection-based sorting algorithm is described as an
        in-place comparison-based algorithm that divides the list into two
        parts, the sorted part on the left and the unsorted part on the right.
        Initially, the sorted section is empty, and the unsorted section
        contains the entire list. When sorting a small list, selection sort can
        be used.
      </p>
      <p>
        Selection sort works by taking the smallest element in an unsorted array
        and bringing it to the front. You’ll go through each item (from left to
        right) until you find the smallest one. The first item in the array is
        now sorted, while the rest of the array is unsorted.
      </p>
      <h2>Selection Sort application</h2>
      <p>The selection sort is used when:</p>
      <ul className={styles.applications_list}>
        <li>checking of all the elements is compulsory</li>
        <li>a small list is to be sorted</li>
        <li>cost of swapping does not matter</li>
        <li>
          cost of writing to a memory matters like in flash memory (number of
          writes/swaps is O(n) as compared to O(n2) of bubble sort)
        </li>
      </ul>
    </div>
  );
};

export default SelectionInfo;
