import React from "react";
import ReactMarkdownComponent from "../reactMarkdown/reactMarkdown";
import styles from "./info.module.css";

const codeSnippet = `
\`\`\`js
const mergeSort = ({ dataSet }) => {
  const length = dataSet.length;
  const array = dataSet;
  const temp = [];
  const front = 0;
  const back = length - 1;

  const divide = (array:, temp, front, end) => {
    if (front < end) {
      const mid = Math.floor((end + front) / 2);
       divide(array, temp, front, mid);
       divide(array, temp, mid + 1, end);
       merge(array, temp, front, mid, end);
    }
  };
  
  const merge =  (
    array,
    temp,
    start,
    mid,
    end
  ) => {
    const sorted = [];
    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
      if (array[i] <= array[j]) {
        sorted.push(array[i++]);
      } else {
        sorted.push(array[j++]);
      }
    }

    while (i <= mid) {
      sorted.push(array[i++]);
    }

    while (j <= end) {
      sorted.push(array[j++]);
    }

    const indexes = [];
    for (let i = start; i <= end; ++i) {
      indexes.push(i);
    }

    for (let i = start; i <= end; ++i) {
      array[i] = sorted[i - start];
      temp.push([i, array[i], indexes]);
    }
  };

  divide(array, temp, front, back);

  return array;
};
\`\`\`
`;

const MergeInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Merge Sort</h2>
      <ReactMarkdownComponent markdown={codeSnippet} />
      <h2 className={styles.header}>How it works?</h2>

      <p>
        The Merge Sort algorithm is a sorting algorithm that is based on the
        Divide and Conquer paradigm. In this algorithm, the array is initially
        divided into two equal halves and then they are combined in a sorted
        manner.
      </p>
      <p>
        Think of it as a recursive algorithm continuously splits the array in
        half until it cannot be further divided. This means that if the array
        becomes empty or has only one element left, the dividing will stop, i.e.
        it is the base case to stop the recursion. If the array has multiple
        elements, split the array into halves and recursively invoke the merge
        sort on each of the halves. Finally, when both halves are sorted, the
        merge operation is applied. Merge operation is the process of taking two
        smaller sorted arrays and combining them to eventually make a larger
        one.
      </p>
    </div>
  );
};

export default MergeInfo;
