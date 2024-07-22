import axios from 'axios';

const API_BASE_URL = 'https://dog.ceo/api';

export const fetchRandomDogImage = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/breeds/image/random`);
        return response.data;
    } catch (error) {
        console.error('Error fetching random dog image:', error);
        throw error;
    }
};

export const fetchDogBreeds = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/breeds/list/all`);
        return response.data;
    } catch (error) {
        console.error('Error fetching dog breeds:', error);
        throw error;
    }
};