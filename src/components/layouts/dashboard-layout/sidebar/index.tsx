import React from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";
import TopicRoundedIcon from "@mui/icons-material/TopicRounded";
import { useTheme } from "@mui/material/styles";

const Sidebar = () => {
  const theme = useTheme();
  return (
    <div>
      <Toolbar
        sx={{ backgroundColor: theme.palette.primary.main }}
        children={
          <Typography variant="inherit" color="GrayText">
            UNIVERSIDAD EAFIT
          </Typography>
        }
      />
      <Divider />
      <List>
        <Link to="/dashboard">
          <ListItem button key={"Inicio"}>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItem>
        </Link>
        <Link to="/dashboard/documents">
          <ListItem button key={"Documentos"}>
            <ListItemIcon>
              <TopicRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Documentos"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
