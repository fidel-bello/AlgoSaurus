import React from "react";
import { bubbleSnippets } from "./codeSnippets/bubble";
import styles from "./info.module.css";
import SnippetsLanguages from "./snippetsLanguages/snippetsLanguages";
import TimeComplexity from "./timeComplexity/timeComplexity";

const BubbleInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Bubble Sort</h2>
      <SnippetsLanguages snippets={bubbleSnippets} />
      <TimeComplexity best="O(n)" worst="O(n2)" average="O(n2)" stable="YES" />
      <h2 className={styles.header}>How it works?</h2>
      <p>
        Bubble sort is a basic algorithm for arranging a string of numbers or
        other elements in the correct order. The method works by examining each
        set of adjacent elements in the string, from left to right, switching
        their positions if they are out of order. The algorithm then repeats
        this process until it can run through the entire string and find no two
        elements that need to be swapped.
      </p>
      <p>
        Computer programmers use bubble sort to arrange a sequence of numbers in
        the correct order. Because it is the simplest type of sorting algorithm,
        bubble sort does not get used much in real-world computer science.
      </p>
      <p>
        Because it has to repeatedly cycle through the entire set of elements,
        comparing only two adjacent items at a time, bubble sort is not optimal
        for more massive datasets. But it can work well when sorting only a
        small number of elements.
      </p>
      <h2>Bubble Sort application</h2>
      <p>
        Bubble sort is pretty slow, almost the slowest (thats why we throw a
        little party when it manages to finish sorting the data hehe), this
        sorting algorithm is only used if:
      </p>
      <ul className={styles.applications_list}>
        <li>complexity does not matter</li>
        <li>short and simple code is preferred</li>
      </ul>
    </div>
  );
};

export default BubbleInfo;
