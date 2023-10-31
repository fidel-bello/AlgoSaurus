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
export interface NodesProps {
  grid?: [];
  col?: number;
  row?: number;
  isStart?: boolean;
  isEnd?: boolean;
  distance?: number;
  isVisited?: boolean;
  isWallNode?: boolean;
  previousNode?: null;
  isNode?: boolean;
  distanceToFinishNode?: number;
  startNode?: number;
  endNode?: number;
  rowCount?: number;
  colCount?: number;
  startNodeCol?: number;
  endNodeCol?: number;
  handleMouseDown?: (row: number, col: number) => void;
  handleMouseUp?: (row: number, col: number) => void
  handleOnMouseEnter?: (row: number, col: number) => void
}


export interface InitialGraphState {
  grid: NodesProps[][];
  startNode: number;
  endNode: number;
  startNodeCol: number;
  endNodeCol: number;
  rowCount: number;
  columnCount: number;
  isWallNode: boolean;
}[];