/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

interface Props {
  setCurrentAlgo: React.Dispatch<
    React.SetStateAction<
      "Bubble" | "Insertion" | "Selection" | "Quick" | "Heap" | "Merge"
    >
  >;
}

const SelectAlgorithm = ({ setCurrentAlgo }: Props) => {
  return (
    <select
      onChange={(e) => {
        // @ts-ignore
        setCurrentAlgo(e.target.value);
      }}
    >
      <option value="Bubble">Bubble</option>
      <option value="Insertion">Insertion</option>
      <option value="Selection">Selection</option>
      <option value="Quick">Quick Sort</option>
      <option value="Heap">Heap Sort</option>
      <option value="Merge">Merge Sort</option>
    </select>
  );
};

export default SelectAlgorithm;
