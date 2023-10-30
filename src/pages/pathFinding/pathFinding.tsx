import React from "react";
import PathFindingGraph from "../../components/graphs/pathFindingGraph";
import { InitialGraphState } from "../../helpers/interfaces/algoInterface";

const initialState: InitialGraphState = {
  grid: [],
  startNode: 5,
  endNode: 5,
  startNodeCol: 5,
  endNodeCol: 15,
  rowCount: 18, 
  columnCount: 26,
  isWallNode: false,
};

const PathFinding: React.FC = () => {
  return <PathFindingGraph {...initialState } />;
};

export default PathFinding;
