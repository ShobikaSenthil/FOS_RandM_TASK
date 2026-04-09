import React from "react";
import { Pagination as MuiPagination, Stack } from "@mui/material";

const Pagination = ({ page, setPage, totalPages }) => {
    return (
        <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
            <MuiPagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                color="primary"
            />
        </Stack>
    );
};

export default Pagination;