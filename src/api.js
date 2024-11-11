import axios from 'axios';

export const fetchNearbyPlaces = async (location, type = 'store') => {
    const { data } = await axios.get(
        `http://localhost:8000/api/nearby-places?location=${location[1]},${location[0]}&type=${type}`
    );
    console.log('----', data)
    return data.results;
};
