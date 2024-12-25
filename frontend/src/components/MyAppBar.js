import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// Center the buttons in the toolbar
function MyAppBar() {

    return (
        <AppBar position="sticky">
        <Toolbar style={{justifyContent: "center", backgroundColor: "pink"}}>
            <Button color="inherit" component={Link} to="/">Applications</Button>
            <Button color="inherit" component={Link} to="/eventTracker">Event</Button>
        </Toolbar>
        </AppBar>
    );


}

export default MyAppBar;