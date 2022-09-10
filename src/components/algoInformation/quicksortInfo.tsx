import React from "react";
import ReactMarkdownComponent from "../reactMarkdown/reactMarkdown";
import styles from "./info.module.css";

const codeSnippet = `
\`\`\`javascript
const quickSort = ({ dataSet }) => {
  const length = dataSet.length;
  const array = dataSet;
  const moves = [];
  const curr = 0;
  const end = length - 1;

  const divider = (moves, array, start, end) => {
    if (start < end) {
      const pivot = partition(moves, array, start, end);

      divider(moves, array, start, pivot - 1);
      divider(moves, array, pivot + 1, end);
    }
  };

  divider(moves, array, curr, end);

  return array;
};

const partition = (moves, array, start, end) => {
  let prv = start - 1;
  for (let index = start; index < end; ++index) {
    if (index !== end) {
      moves.push([index, end]);
    }
    if (array[index] < array[end]) {
      ++prv;
      swapElements(array, index, prv);
      moves.push([index, prv]);
    }
  }

  swapElements(array, prv + 1, end);
  moves.push([end, prv + 1]);
  return prv + 1;
};
\`\`\`
`;

const QuicksortInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Quick Sort</h2>
      <ReactMarkdownComponent markdown={codeSnippet} />
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
    </div>
  );
};

export default QuicksortInfo;
