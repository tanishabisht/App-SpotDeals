import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoidGFuaXNoYWJpc2h0IiwiYSI6ImNtM2Nhd3UybjF2MmwyanBzZDRvaTc5a2kifQ.ZIquHzb6uRuda8o_rICvyg"

const Map = ({ userLocation, offers }) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: userLocation,
            zoom: 12,
        });

        // Add markers for each offer
        offers.forEach((offer) => {
            new mapboxgl.Marker()
                .setLngLat([offer.location.lng, offer.location.lat])
                .setPopup(new mapboxgl.Popup().setText(offer.name))
                .addTo(map);
        });

        return () => map.remove();
    }, [userLocation, offers]);

    return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
