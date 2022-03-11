import styled from "styled-components";
import { Tooltip, withStyles } from "@material-ui/core";

export const Tooltips = withStyles(() => ({
  tooltip: {
    border: "1px solid red",
  },
}))(Tooltip);
