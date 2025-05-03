import axios from "axios";

const getAPI = async (url: string, params: any) => {
    try {
        axios.get(url)
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    throw new Error('Error fetching data from API');
                }
            })

    } catch (error) {
        // console.error('Error fetching data:', error);
        throw error; // Rethrow the error to be handled by the caller
    }

}