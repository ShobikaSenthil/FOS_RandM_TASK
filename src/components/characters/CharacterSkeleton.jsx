import { Grid, Skeleton, Card } from "@mui/material";

const CharacterSkeleton = () => {
    return (
        <Grid container spacing={3}>
            {[...Array(8)].map((_, i) => (
                <Grid item key={i}>
                    <Card sx={{ width: 350, borderRadius: 5, boxShadow: 5 }}>
                        <Skeleton variant="rectangular" height={300} />
                        <Skeleton height={30} />
                        <Skeleton width="60%" />
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default CharacterSkeleton;