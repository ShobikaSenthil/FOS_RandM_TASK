import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchCharacters = async ({ page, name, status }) => {
    const response = await axios.get(`${BASE_URL}/character`, {
        params: { page, name, status },
    });
    return response.data;
};