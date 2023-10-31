import React from "react";
import { Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import { NodesProps } from "../../../../helpers/interfaces/algoInterface";
import { green, red } from "@mui/material/colors";

const Nodes = ({
  row,
  col,
  isEnd,
  isStart,
  isWallNode
}: NodesProps) => {

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const nodeSize = isXs ? "0.3em" : isSm ? "0.8em" : "1.0em";
  const backgroundColor = isWallNode ? "#1A2027": isStart ? green[500]: isEnd ? red[500] : "#1A2027"
  return (
    <Grid item>
      <Paper
        id={`node-${row}-${col}`}
        sx={{
          height: nodeSize,
          width: nodeSize,
          m: 0.5,
          backgroundColor: backgroundColor
        }}
      />
    </Grid>
  );
};

export default Nodes;
