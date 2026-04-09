import React from "react";
import { Grid } from "@mui/material";
import Character from "./Character";

const CharacterList = ({ characters }) => {
    return (
        <Grid container spacing={3} justifyContent="center">
            {characters.map((char) => (
                <Grid item key={char.id}>
                    <Character character={char} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CharacterList