import React from "react";
import BubbleInfo from "../../../components/algoInformation/bubbleInfo";
import CountInfo from "../../../components/algoInformation/countInfo";
import HeapInfo from "../../../components/algoInformation/heapInfo";
import InsertionInfo from "../../../components/algoInformation/insertionInfo";
import MergeInfo from "../../../components/algoInformation/mergeInfo";
import QuicksortInfo from "../../../components/algoInformation/quicksortInfo";
import SelectionInfo from "../../../components/algoInformation/selectionInfo";
import ShellInfo from "../../../components/algoInformation/shellInfo";

interface Props {
  currentAlgo:
    | "Bubble"
    | "Insertion"
    | "Selection"
    | "Quick"
    | "Heap"
    | "Merge"
    | "Shell";
}

const ReturnCorrectInfo = ({ currentAlgo }: Props) => {
  if (currentAlgo === "Bubble") return <BubbleInfo />;
  if (currentAlgo === "Heap") return <HeapInfo />;
  if (currentAlgo === "Insertion") return <InsertionInfo />;
  if (currentAlgo === "Merge") return <MergeInfo />;
  if (currentAlgo === "Quick") return <QuicksortInfo />;
  if (currentAlgo === "Selection") return <SelectionInfo />;
  if (currentAlgo === "Shell") return <ShellInfo />;

  return <></>;
};

export default ReturnCorrectInfo;
