import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchCharacters = async ({ page, name, status }) => {
    try {
        const response = await axios.get(`${BASE_URL}/character`, {
            params: {
                page,
                ...(name ? { name } : {}),
                ...(status ? { status } : {}),
            },
        });

        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return {
                results: [],
                info: { pages: 1 },
            };
        }

        throw error;
    }
};