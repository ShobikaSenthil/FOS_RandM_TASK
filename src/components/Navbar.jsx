import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="fixed" elevation={2}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Rick & Morty Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;