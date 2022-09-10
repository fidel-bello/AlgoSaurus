import React from "react";
import ReactMarkdownComponent from "../reactMarkdown/reactMarkdown";
import styles from "./info.module.css";

const codeSnippet = `
\`\`\`javascript
const insertionSort = ({ dataSet }) => {
  const length = dataSet.length;
  const array = dataSet;

  for (let i = 0; i < length; i++) {
    const current = array[i];
    let j = i - 1;

    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }

  return array;
};
\`\`\`
`;

const InsertionInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Insertion Sort</h2>
      <ReactMarkdownComponent markdown={codeSnippet} />
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
