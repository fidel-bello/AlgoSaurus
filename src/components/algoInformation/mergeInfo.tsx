import React from "react";
import { mergeSnippets } from "./codeSnippets/merge";
import styles from "./info.module.css";
import SnippetsLanguages from "./snippetsLanguages/snippetsLanguages";
import TimeComplexity from "./timeComplexity/timeComplexity";

const MergeInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Merge Sort</h2>
      <SnippetsLanguages snippets={mergeSnippets} />
      <TimeComplexity
        best="O(n*log n)"
        worst="O(n*log n)"
        average="O(n*log n)"
        stable="YES"
      />

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
