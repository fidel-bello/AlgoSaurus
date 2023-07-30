import React from "react";
import styles from "./graph.module.css";
import Nodes from "../nodes/nodes";
import { InitialGraphState, Node } from "../../helpers/interfaces/algoInterface";

const PathFindingGraph = (initialState: InitialGraphState): JSX.Element => {

  const { useState, useEffect } = React;
  const [state, setState] = useState<InitialGraphState>(initialState);
  
  useEffect(() => {
    const newGrid = getInitializedGrid();
    setState(prevState => ({ ...prevState, grid: newGrid }));
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
      isWallNode: false,
      previousNode: null,
    };
  };

  const handleMouseDown = (row: number, col: number) => {
    // TODO - Fix this
  }

  const handleMouseUp = (row: number, col: number) => {
    // TODO - Fix this
  }


  return (
    <table className={styles.grid_container}>
      <tbody className={styles.grid}>
        {state.grid.map((row: any, rowIdx: number) => {
           return (
            <tr key={rowIdx}>
                {row.map((node: Node, nodeIdx: number) => {
    
                    const { row, col, isFinish, isStart, isWallNode } = node;
                    return  (
                          <Nodes
                            key={nodeIdx}
                            col={col}
                            row={row}
                            isFinishNode={isFinish}
                            isStart={isStart}
                            isWall={isWallNode}
                          />
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
