import React, { useState, useEffect } from "react";
import styles from "./graph.module.css";


export interface InitialGraphState {
  grid: [];
  startNode: number,
  endNode: number,
  startNodeCol: number,
  endNodeCol: number,
  rowCount: number;
  columnCount: number;
  isMousePressed: boolean;
  isRunning: boolean;
  isStartNode: boolean;
  isFinishNode: boolean;
  isWallNode: boolean;
  currRow: number;
  currCol: number;
  isDesktopView: boolean;
}

const PathFindingGraph = (initialState: InitialGraphState): JSX.Element => {
  const [state, setState] = useState<any>(initialState);

  useEffect(() => {
    const newGrid = getInitializedGrid();
    setState({ grid: newGrid });
  }, [initialState]);

  const getInitializedGrid = () => {
    const grid = [];
    for (let row = 0; row < state.rowCount; row++) {
      const currRow = [];
      for (let col = 0; col < state.columnCount; col++) {
        currRow.push(createNode(col, row));
      }

      grid.push(currRow);
    }

    return grid;
  };

  const createNode = (col: number, row: number) => {
    return {
      col,
      row,
      isStart: row === state.startNode && col === state.startNodeCol,
      isFinish: row === state.endNode && col === state.endNodeCol,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };


  return (
    <table className={styles.grid_container}>
      <tbody className={styles.grid}>
        {state.grid.map((row: any, rowIdx: number) => {
           return (
            <tr key={rowIdx}>
                {row.map((node: any, nodeIdx: number) => {
                    const {row, col } = node;
                    return  (
                        <td key={nodeIdx} id={`node-${row}-${col}`} className={styles.node}></td>
                    )
                })}
            </tr>
           )
        })}
      </tbody>
    </table>
  );
};

export default PathFindingGraph;
