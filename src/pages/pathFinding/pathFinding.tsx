import React from "react";
import PathFindingGraph, {
  InitialGraphState,
} from "../../components/graphs/pathFindingGraph";

const initialState: InitialGraphState = {
  grid: [],
  startNode: 5,
  endNode: 5,
  startNodeCol: 5,
  endNodeCol: 15,
  rowCount: 25,
  columnCount: 35,
  isMousePressed: false,
  isRunning: false,
  isStartNode: false,
  isFinishNode: false,
  isWallNode: false,
  currRow: 0,
  currCol: 0,
  isDesktopView: true,
};

const PathFinding: React.FC = () => {
  return <PathFindingGraph {...initialState } />;
};

export default PathFinding;
