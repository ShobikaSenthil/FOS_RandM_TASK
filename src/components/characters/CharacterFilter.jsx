import React from "react";
import { TextField, MenuItem, Box } from "@mui/material";

const CharacterFilter = ({ name, setName, status, setStatus }) => {
    return (
        <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
                size="small"
                placeholder="Search..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
            />

            <TextField
                select
                size="small"
                value={status || "all"}
                onChange={(e) =>
                    setStatus(e.target.value === "all" ? "" : e.target.value)
                }
                sx={{ backgroundColor: "white", borderRadius: 1, minWidth: 120 }}
            >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="alive">Alive</MenuItem>
                <MenuItem value="dead">Dead</MenuItem>
            </TextField>
        </Box>
    );
};

export default CharacterFilter;