import React from "react";
import ReactMarkdownComponent from "../reactMarkdown/reactMarkdown";
import styles from "./info.module.css";

const codeSnippet = `
\`\`\`js
const shellSort= ({ dataSet }) => {
  let increment = dataSet.length / 2;
  const arr = dataSet;

  while (increment > 0) {
    for (let i = increment; i < arr.length; i++) {
      let j = i;
      const temp = arr[i];
      setCurrentIndex(temp);

      while (j >= increment && arr[j - increment] > temp) {
        arr[j] = arr[j - increment];
        j = j - increment;
        setCurrentIndex(arr[i]);
        setCurrentIndex2(j);
        setDataSet([...arr]);
        await sleep(delay);
      }
      arr[j] = temp;
      setCurrentIndex(temp);
      setCurrentIndex2(i);
      setCurrentIndex3(arr[i]);

      await sleep(delay);

      setDataSet([...arr]);
    }
    if (increment == 2) {
        increment = 1;
      } else {
        // @ts-ignore
        increment = parseInt((increment * 5) / 11);
      }
    }
    setDataSet([...arr]);
    // setIsAlgorithmRunning(false);
  }
\`\`\`
`
;

const shellInfo = () => {
    return (
        <div className={styles.container}>
        <h2 className={styles.header}>Shell Sort</h2>
        <ReactMarkdownComponent markdown={codeSnippet} />
        <h2 className={styles.header}>How it works?</h2>
         <p>
          The Shell sort is an in-place comparison sort. It can be seen as
           either a generalization of sorting by exchange bubble sort or 
           sorting by insertion insertion sort.The method starts by 
           sorting pairs of elements far apart from each other, then
           progressively reducing the gap between elements to be compared.
         </p>
         <p>
         Shellsort is an optimization of insertion sort that allows the exchange
         of items that are far apart. The idea is to arrange the list of elements 
         so that, starting anywhere, taking every hth element produces a sorted list.
         Such a list is said to be h-sorted. It can also be thought of as h interleaved
         lists, each individually sorted.Beginning with large values of h allows elements to move long
         distances in the original list, reducing large amounts of disorder quickly, and leaving
         less work for smaller h-sort steps to do. If the list is then k-sorted for some smaller
         integer k, then the list remains h-sorted. Following this idea for a decreasing sequence 
         of h values ending in 1 is guaranteed to leave a sorted list in the end.
         </p>
         </div>
    );
};

export default shellInfo;
 