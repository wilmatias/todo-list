import axios from "axios";

export const makeRequest = async (method: string, endpoint: string, param: any | null = null) => {
    const baseurl = import.meta.env.VITE_API_BASE_URL;
    const headers = {
        'Content-Type' : 'application/json',
    }
    try {
        const response = await axios({
            method: method.toLowerCase(),
            url: baseurl + endpoint,
            headers: headers,
            params: param,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};