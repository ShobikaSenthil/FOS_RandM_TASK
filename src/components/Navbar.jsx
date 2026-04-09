import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import CharacterFilter from "./characters/CharacterFilter";

const Navbar = ({ name, setName, status, setStatus }) => {
    return (
        <AppBar position="fixed" elevation={2}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    FOS Rick & Morty Dashboard
                </Typography>
                <Box>
                    <CharacterFilter
                        name={name}
                        setName={setName}
                        status={status}
                        setStatus={setStatus}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;