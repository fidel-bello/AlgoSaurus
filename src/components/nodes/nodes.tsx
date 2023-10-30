import React from "react";
import styles from "./nodes.module.css";
import { Node } from "../../helpers/interfaces/algoInterface";


const Nodes =({ row, col, isFinish, isWallNode, isStart, handleMouseDown, handleMouseUp, handleOnMouseEnter }: Node) => {
 
  return (
    <td
      id={`node-${row}-${col}`}
      className={`${styles.node} ${isFinish ? styles.node_finish :
        isStart ? styles.node_start : isWallNode ? styles.node_wall : ""}`}
      onMouseDown={() => handleMouseDown && handleMouseDown(row, col)}
      onMouseUp={() => handleMouseUp && handleMouseUp(row, col)}
      onMouseEnter={() => handleOnMouseEnter && handleOnMouseEnter(row, col)}
    ></td>
  );
};

export default Nodes;
