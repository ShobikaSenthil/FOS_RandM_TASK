import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";

const Character = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 350, borderRadius: 5, boxShadow: 5 }}>
      <CardMedia
        component="img"
        height="350"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography variant="h6">{character.name}</Typography>
        <Chip
          label={character.status}
          color={character.status === "Alive" ? "success" : "error"}
          size="small"
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  )
}

export default Character
