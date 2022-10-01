import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { BsChevronDown } from "react-icons/bs";
import styles from "../about.module.css";

interface Props {
  header: string;
  bodyHTML: JSX.Element;
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

const CustomAccordionItem = ({
  header,
  bodyHTML,
  handleChange,
  expanded,
}: Props) => {
  return (
    <Accordion expanded={expanded === header} onChange={handleChange(header)}>
      <AccordionSummary
        expandIcon={<BsChevronDown />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography>
          <span
            className={styles.accordion_header}
            style={
              expanded === header ? { fontSize: "38px", marginTop: "15px" } : {}
            }
          >
            {header}
          </span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{bodyHTML}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordionItem;
