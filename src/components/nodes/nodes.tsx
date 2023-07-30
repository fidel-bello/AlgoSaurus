import React from "react";
import styles from "./nodes.module.css";
import { Node } from "../../helpers/interfaces/algoInterface";

const Nodes = (props: Node) => {
  return (
    <td
      id={`node-${props.row}-${props.col}`}
      className={`${styles.node} ${props.isFinish ? styles.node_finish : 
        props.isStart ? styles.node_start : props.isWallNode ? styles.node_wall : ""}`}
    ></td>
  );
};

export default Nodes;
