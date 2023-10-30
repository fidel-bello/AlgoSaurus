import React from "react";
import { Grid, Paper, useMediaQuery, useTheme } from "@mui/material";

const Nodes = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  
    const nodeSize = isXs ? '0.3em' : isSm ? '0.8em' : '1.0em';

   
    return (
        <Grid item >
        <Paper
          sx={{
            height: nodeSize,
            width: nodeSize,
            m: 0.5,
            backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        />
      </Grid>
    )
}

export default Nodes;