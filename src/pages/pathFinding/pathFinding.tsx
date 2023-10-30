import React from "react";
import PathFindingGrid from "../../components/graphs/pathFinding/pathFindingGraph";
import { InitialGraphState } from "../../helpers/interfaces/algoInterface";

const initialState: InitialGraphState = {
  grid: [],
  startNode: 5,
  endNode: 5,
  startNodeCol: 5,
  endNodeCol: 15,
  rowCount: 20, 
  columnCount: 40,
  isWallNode: false,
};

const PathFinding: React.FC = () => {
  return <PathFindingGrid {...initialState } />;
};

export default PathFinding;
