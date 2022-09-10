import React from "react";
import ReactMarkdownComponent from "../reactMarkdown/reactMarkdown";
import styles from "./info.module.css";

const codeSnippet = `
\`\`\`js
const selectionSort = ({ dataSet }) => {
  const length = dataSet.length;
  const array = dataSet;

  for (let i = 0; i < length; i++) {
    let minValue = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minValue]) {
        minValue = j;
      }
    }

    if (minValue != i) {
      // Swapping the elements
      const tmp = array[i];
      array[i] = array[minValue];
      array[minValue] = tmp;
    }
  }

  return array;
}
\`\`\`
`;

const SelectionInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Selection Sort</h2>
      <ReactMarkdownComponent markdown={codeSnippet} />
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
    </div>
  );
};

export default SelectionInfo;
