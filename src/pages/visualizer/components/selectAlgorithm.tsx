/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

interface Props {
  setCurrentAlgo: React.Dispatch<
    React.SetStateAction<
      | "Bubble"
      | "Insertion"
      | "Selection"
      | "Quick"
      | "Heap"
      | "Merge"
      | "Shell"
    >
  >;
  currentAlgo:
    | "Bubble"
    | "Insertion"
    | "Selection"
    | "Quick"
    | "Heap"
    | "Merge"
    | "Shell";
}

const SelectAlgorithm = ({ setCurrentAlgo, currentAlgo }: Props) => {
  return (
    <select
      onChange={(e) => {
        // @ts-ignore
        setCurrentAlgo(e.target.value);
      }}
      value={currentAlgo}
    >
      <option value="Bubble">Bubble</option>
      <option value="Insertion">Insertion</option>
      <option value="Selection">Selection</option>
      <option value="Quick">Quick Sort</option>
      <option value="Heap">Heap Sort</option>
      <option value="Merge">Merge Sort</option>
      <option value="Shell">Shell Sort</option>
    </select>
  );
};

export default SelectAlgorithm;
