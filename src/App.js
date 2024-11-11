import React, { useState, useEffect } from 'react';
import { Map } from './components';
import { fetchNearbyPlaces } from './api';

const App = () => {
    const [userLocation, setUserLocation] = useState([0, 0]);
    const [offers, setOffers] = useState([]);
    const [filter, setFilter] = useState('store');

    const fetchOffers = async (type) => {
        const places = await fetchNearbyPlaces(userLocation, type);
        const offersData = places.map((place) => ({
            name: place.name,
            location: {
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
            },
        }));
        setOffers(offersData);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const userLoc = [position.coords.longitude, position.coords.latitude];
                setUserLocation(userLoc);
                fetchOffers(filter);
            },
            (error) => console.error('Error getting location:', error)
        );
    }, [filter]);

    return (
        <div>
            <h1>Nearby Offers</h1>
            <button onClick={() => setFilter('restaurant')}>Restaurants</button>
            <button onClick={() => setFilter('store')}>Stores</button>
            <Map userLocation={userLocation} offers={offers} />
        </div>
    );
};

export default App