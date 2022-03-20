import React from "react";

import {
  Avatar,
  Box,
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
          <>
            <Avatar sx={{ width: "35px", height: "35px" }}>C</Avatar>
            <Typography variant="inherit" color="GrayText" sx={{ ml: 2 }}>
              Cristian Franco
            </Typography>
          </>
        }
      />
      <Box sx={{ m: 5 }}>
        <Typography variant="inherit">Carpeta Ciudadana</Typography>
      </Box>
      <List sx={{ backgroundColor: "" }}>
        <Divider />
        <Link to="/dashboard">
          <ListItem button key={"Inicio"} sx={{ ml: 2 }}>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/dashboard/documents">
          <ListItem button key={"Documentos"} sx={{ ml: 2 }}>
            <ListItemIcon>
              <TopicRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Documentos"} />
          </ListItem>
        </Link>
        <Divider />
      </List>
    </div>
  );
};

export default Sidebar;
