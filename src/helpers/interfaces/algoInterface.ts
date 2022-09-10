import React from "react";

export interface AlgoInterface {
  dataSet: number[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentIndex2?: React.Dispatch<React.SetStateAction<number | null>>;
  setCurrentIndex3?: React.Dispatch<React.SetStateAction<number | null>>;
  setDataSet: React.Dispatch<React.SetStateAction<number[] | null>>;
  delay: number;
  setRunConfetti?: React.Dispatch<React.SetStateAction<boolean>>;
}
