import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const locations = [
  { id: 1, name: 'Kathmandu', lat: 27.7172, lon: 85.3240 },
  { id: 2, name: 'Pokhara', lat: 28.2639, lon: 83.9726 },
];

const InteractiveMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([27.7172, 85.3240], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    locations.forEach((location) => {
      
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-6" style={{ maxWidth: '1200px' }}>
    <div
      id="map"
      className="relative rounded-lg overflow-hidden"
      style={{ height: '400px', width: '100%' }}
    >
      <style>{`
        #map {
          border: 8px solid #ccc;
          border-radius: 10px;
        }
      `}</style>
    </div>
  </div>
  );
};

export default InteractiveMap;
