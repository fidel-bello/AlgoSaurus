import React, { useState, useEffect } from "react";
import { InitialGraphState, NodesProps } from "../../../helpers/interfaces/algoInterface";
import { Grid } from "@mui/material";
import Nodes from "./node/nodes";
import { createGrid } from "../../../helpers/functions/helperFunctions";

const PathFindingGrid = (initialState: InitialGraphState): JSX.Element => {
  
  const [grid, setGrid] = useState<NodesProps[][]>([]);

  useEffect(() => {
    const newGrid = createGrid({
      rowCount: initialState.rowCount,
      colCount: initialState.columnCount,
      startNode: initialState.startNode,
      startNodeCol: initialState.startNodeCol,
      endNode: initialState.endNode,
      endNodeCol: initialState.endNodeCol,
      isWallNode: initialState.isWallNode,
    });

    setGrid(newGrid)
  }, [initialState]);


  return (
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid item xs={12}>
        <Grid container sx={{ flexWrap: "nowrap" }} justifyContent="center">
          {grid.map((row: NodesProps[], rowIdx) => (
            <Grid key={rowIdx} item>
              {row.map((node: NodesProps, nodeIdx) => (
                <Grid key={nodeIdx} item>
                  <Nodes
                    row={rowIdx}
                    col={nodeIdx}
                    isEnd={node.isEnd}
                    isStart={node.isStart}
                    isWallNode={node.isWallNode}
                  />
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PathFindingGrid;

// import React, { useRef } from "react";
// import styles from;
// import Nodes from "../nodes/nodes";
// import { InitialGraphState, Node } from "../../helpers/interfaces/algoInterface";

// const PathFindingGraph = (initialState: InitialGraphState): JSX.Element => {

//   const { useState, useEffect } = React;
//   const [grid, setGrid] = useState<Node[][]>([]);
//   const [state, setState] = useState<InitialGraphState>(initialState);
//   const [isRunning, setIsRunning] = useState<boolean>(false); // a bool state for the algorithms, not yet implemented
//   const [isStartNode, setIsStartNode] = useState(false);
//   const [isFinishNode, setIsFinishNode] = useState(false);
//   const [START_NODE_ROW, setSTART_NODE_ROW] = useState(5);
//   const [FINISH_NODE_ROW, setFINISH_NODE_ROW] = useState(5);
//   const [START_NODE_COL, setSTART_NODE_COL] = useState(5);
//   const [FINISH_NODE_COL, setFINISH_NODE_COL] = useState(15);
//   const [isWallNode, setIsWallNode] = useState(false);
//   const [currRow, setCurrRow] = useState(0);
//   const [currCol, setCurrCol] = useState(0);
//   const ROW_COUNT = initialState.rowCount;
//   const COLUMN_COUNT = initialState.columnCount;

//   const mouseIsPressedRef = useRef(false);

//   useEffect(() => {
//     const newGrid = getInitializedGrid();
//     setState(prevState => ({ ...prevState, grid: newGrid }));
//   }, [initialState]);

//   const getInitializedGrid = () => {
//     const grid = [];
//     for (let row = 0; row < ROW_COUNT; row++) {
//       const currRow = [];
//       for (let col = 0; col < COLUMN_COUNT; col++) {
//         currRow.push(createNode(col, row));
//       }
//       grid.push(currRow);
//     }
//     return grid;
//   };

//   const getNewGridWithWallToggled = (grid: Node[][], row: number, col: number) => {
//     // check for out of bounds
//     if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
//       return grid;
//     }

//     const node = grid[row][col];

//     if (!node.isStart && !node.isFinish && node.isNode) {
//       const newNode = {
//         ...node,
//         isWallNode: !isWallNode
//       };

//       grid[row][col] = newNode;
//     }

//     return grid;
//   };

//   const createNode = (col: number, row: number) => {
//     return {
//       col,
//       row,
//       isStart: row === START_NODE_ROW && col === START_NODE_COL,
//       isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
//       distance: Infinity,
//       isVisited: false,
//       isWallNode: false,
//       previousNode: null,
//     };
//   };

//   const isGridClear = () => {
//     for (const row of state.grid) {
//       for (const node of row) {
//         const nodeElement = document.getElementById(`node-${node.row}-${node.col}`);
//         if (nodeElement) {
//           const nodeClassName = nodeElement.className;
//           if (nodeClassName === `${styles.node} ${styles.node_visited}` || nodeClassName === `${styles.node} ${styles.node_shortest_path}`) {
//             return false;
//           }
//         }

//       }
//     }
//     return true;
//   };

//   const handleMouseDown = (row: number, col: number) => {
//     if (!isRunning) {
//       if (isGridClear()) {
//         const nodeElement = document.getElementById(`node-${row}-${col}`);
//         if (nodeElement) {
//           if (nodeElement.className === styles.node_start) {
//             setIsStartNode(true);
//           } else if (nodeElement.className === styles.node_finish) {
//             setIsFinishNode(true);
//           } else {
//             const newGrid = getNewGridWithWallToggled(state.grid, row, col);
//             setGrid([...newGrid]);
//             setIsWallNode(true);
//           }

//           setCurrRow(row);
//           setCurrCol(col);
//           mouseIsPressedRef.current = true;
//         }
//       }
//     }
//   }

//   const handleMouseUp = (row: number, col: number) => {
//     if (!isRunning) {
//       if (isStartNode) {
//         setIsStartNode(false);
//         setSTART_NODE_ROW(row);
//         setSTART_NODE_COL(col);
//       }

//       if (isFinishNode) {
//         setIsFinishNode(false);
//         setFINISH_NODE_ROW(row);
//         setFINISH_NODE_COL(col);
//       }

//       const updatedGrid = [...grid];
//       setGrid(updatedGrid);
//       mouseIsPressedRef.current = false
//     }
//   };

//   const handleMouseEnter = (row: number, col: number) => {
//     if (!isRunning && mouseIsPressedRef.current) {
//       const node = grid[row][col];
//       if (isStartNode) {
//         grid[currRow][currCol].isStart = false;
//         node.isStart = true;
//         setSTART_NODE_ROW(row);
//         setSTART_NODE_COL(col);
//       } else if (isFinishNode) {
//         grid[currRow][currCol].isFinish = false;
//         node.isFinish = true;
//         setFINISH_NODE_ROW(row);
//         setFINISH_NODE_COL(col);
//       } else if (isWallNode && !node.isStart && !node.isFinish) {
//         node.isWallNode = !node.isWallNode;
//       }
//       setGrid([...grid]);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (isStartNode) {
//       setIsStartNode(false)
//     } else if (isFinishNode) {
//       setIsFinishNode(false);
//     } else if (isWallNode) {
//       setIsWallNode(false);
//       getInitializedGrid();
//     }
//     mouseIsPressedRef.current = false;
//   }

//   return (
//     <table
//       className={styles.grid_container}
//       onMouseLeave={handleMouseLeave}
//     >
//       <tbody className={styles.grid}>
//         {state.grid.map((row: Node[], rowIdx: number) => {
//           return (
//             <tr key={rowIdx}>
//               {row.map((node: Node, nodeIdx: number) => {
//                 const { col, isFinish, isStart, isWallNode } = node
//                 return (
//                   <Nodes
//                     key={nodeIdx}
//                     col={col}
//                     row={rowIdx}
//                     isFinish={isFinish}
//                     isStart={isStart}
//                     isWallNode={isWallNode}
//                     handleMouseDown={() => handleMouseDown(rowIdx, col)}
//                     handleMouseUp={() => handleMouseUp(rowIdx, col)}
//                     handleOnMouseEnter={() => handleMouseEnter(rowIdx, col)}
//                   />
//                 )
//               })}
//             </tr>
//           )
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default PathFindingGraph;

// /**
//  *
//  * will use eventually
//  * const clearGrid = () => {
//     if (!isRunning) {
//       const newGrid = [...state.grid];
//       for (const row of newGrid) {
//         for (const node of row) {
//           const nodeClassName = document.getElementById(`node-${node.row}-${node.col}`)?.className;
//           if (
//             nodeClassName !==`${styles.node} ${styles.node_start}` &&
//             nodeClassName !==`${styles.node} ${styles.node_finish}` &&
//             nodeClassName !==`${styles.node} ${styles.node_wall}`
//           ) {
//             if (document.getElementById(`node-${node.row}-${node.col}`)) {
//               document.getElementById(`node-${node.row}-${node.col}`)!.className =`${styles.node}`
//             }

//             node.isVisited = false;
//             node.distance = Infinity;
//             node.distanceToFinishNode =
//               Math.abs(FINISH_NODE_ROW - node.row) + Math.abs(FINISH_NODE_COL - node.col);
//           }
//           if (nodeClassName === `${styles.node} ${styles.node_finish}`) {
//             node.isVisited = false;
//             node.distance = Infinity;
//             node.distanceToFinishNode = 0;
//           }
//           if (nodeClassName ===`${styles.node} ${styles.node_start}`) {
//             node.isVisited = false;
//             node.distance = Infinity;
//             node.distanceToFinishNode =
//               Math.abs(FINISH_NODE_ROW - node.row) + Math.abs(FINISH_NODE_COL - node.col);
//             node.isStart = true;
//             node.isWallNode = false;
//             node.previousNode = null;
//             node.isNode = true;
//           }
//         }
//       }
//     }
//   };

//  */
