import React from "react";
import ReactMarkdownComponent from "../reactMarkdown/reactMarkdown";
import styles from "./info.module.css";

const codeSnippet = `
\`\`\`javascript
function bubbleSort(arr){
    
  for(var i = 0; i < arr.length; i++){
     
    // Last i elements are already in place 
    for(var j = 0; j < ( arr.length - i -1 ); j++){
       
      // Checking if the item at present iteration
      // is greater than the next iteration
      if(arr[j] > arr[j+1]){
         
        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  // Print the sorted array
  console.log(arr);
 }
\`\`\`
`;

const BubbleInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Bubble Sort</h2>
      <ReactMarkdownComponent markdown={codeSnippet} />
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
    </div>
  );
};

export default BubbleInfo;
