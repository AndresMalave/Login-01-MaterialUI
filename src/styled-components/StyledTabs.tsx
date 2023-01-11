import styled from "@emotion/styled";
import { Tabs, Tab } from "@mui/material";

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#f00",
    height: "50px",
    borderRadius: 50,
    top: "10px",
  },
});

const StyledTab = styled(Tab)({
  color: "#f00",
  fontWeight: "bold",
  zIndex: 10,
  "&.Mui-selected": {
    color: "#fff",
  },
});

export { StyledTabs, StyledTab };
