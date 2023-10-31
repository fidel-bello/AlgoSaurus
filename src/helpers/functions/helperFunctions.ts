import { NodesProps } from "../interfaces/algoInterface";

interface Props {
  total: number;
  max: number;
  min: number;
}

export const generateRandomArray = ({ total, max, min }: Props) => {
  return Array.from({ length: total }, () =>
    Math.floor(Math.random() * (max - min) + min)
  );
};

export const swapElements = (array: number[], y: number, x: number) => {
  const cache = array[y];
  array[y] = array[x];
  array[x] = cache;
};

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milliseconds);
  });
};


// helpers for pathfinding
export const createGrid = ({ startNode, endNode, rowCount, isWallNode, colCount, startNodeCol, endNodeCol }: NodesProps)  => {
  const grid: NodesProps[][] = [];

  if (!rowCount) throw Error("");
  if (!endNode) throw Error("");
  if (!startNode) throw Error("");
  if (!colCount) throw Error("");
  if (!startNodeCol) throw Error("");
  if (!endNodeCol) throw Error("");


  for (let row = 0; row < rowCount; row++) {
    grid.push(createRow({ startNode, endNode, row, rowCount, isWallNode, colCount, startNodeCol, endNodeCol }));
  }

  return grid;
}


const createRow = ({ startNode, endNode, row, colCount, startNodeCol, endNodeCol }: NodesProps ) => {
  const rows: NodesProps[]= [];

  if (!colCount) throw Error("");
  if (!endNode) throw Error("");
  if (!startNode) throw Error("");

  for (let col = 0; col < colCount; col += 1) {
    rows.push(createNode({ startNode, endNode, row, col, colCount, startNodeCol, endNodeCol }))
  }

  return rows;
}

const createNode = ({ row, col, startNode, endNode, startNodeCol, endNodeCol}: NodesProps) => {
  if (!endNode) throw Error("");
  if (!startNode) throw Error("");
  if (!startNodeCol) throw Error("");
  if (!endNodeCol) throw Error("");
  
  return {
    col,
    row,
    isStart: row === startNode && col === startNodeCol , 
    isEnd: row === endNode - 2 && col === endNodeCol - 2,  
    isWallNode: false,
    previousNode: null,
  }
}