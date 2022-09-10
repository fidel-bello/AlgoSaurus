import React from "react";
import styles from "./info.module.css";

const codeSnippet = `
\`\`\`javascript
const bubbleSort = ({ arr }) => {
    
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

const InsertionInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Insertion Sort</h2>
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
