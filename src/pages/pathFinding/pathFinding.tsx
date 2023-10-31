import React from "react";
import PathFindingGrid from "../../components/graphs/pathFinding/pathFindingGraph";
import { InitialGraphState } from "../../helpers/interfaces/algoInterface";

const initialState: InitialGraphState = {
  grid: [],
  startNode: 1,
  startNodeCol: 1,
  endNode: 40,
  endNodeCol: 20,  
  rowCount: 40, 
  columnCount: 20,
  isWallNode: false,
};

const PathFinding: React.FC = () => {
  return <PathFindingGrid {...initialState } />;
};

export default PathFinding;
