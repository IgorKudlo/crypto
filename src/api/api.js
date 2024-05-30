import axios from "axios";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

export const getCoins = async () => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': key,
        },
    };

    try {
        const response = await axios.get(`${url}/coins`, options);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
}