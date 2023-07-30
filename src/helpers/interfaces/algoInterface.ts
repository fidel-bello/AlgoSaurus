import React from "react";

export interface AlgoInterface {
  dataSet: number[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentIndex2?: React.Dispatch<React.SetStateAction<number | null>>;
  setCurrentIndex3?: React.Dispatch<React.SetStateAction<number | null>>;
  setDataSet: React.Dispatch<React.SetStateAction<number[] | null>>;
  delay: number;
  target?: number;
  setIsConfettiRunning?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAlgorithmRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

// Grid and Node Interfaces for pathfinding
export interface Node {
  col: number;
  row: number;
  isStart: boolean;
  isFinish: boolean;
  distance?: number;
  isVisited?: boolean;
  isWallNode: boolean;
  previousNode?: null;
}


export interface InitialGraphState {
  grid: Node[][];
  startNode: number;
  endNode: number;
  startNodeCol: number;
  endNodeCol: number;
  rowCount: number;
  columnCount: number;
  isWallNode: boolean;
}[];