import axios from 'axios';


export const fetchImg = async (currentPage) => {
    
    axios.defaults.baseURL = 'https://pixabay.com/api';

    const params = new URLSearchParams({
        page : currentPage,
        per_page: 12,
        key: "39093226-ac0b10f11dd0e76f215b060f9",
        q: 'cat',
        image_type: "photo",
        orientation: "horizontal",
    });

    const response = await axios.get(`?${params}`);
    return response.data;  
};