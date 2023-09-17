import React, { useEffect, useMemo } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWJyYWhpbTEzIiwiYSI6ImNsbW5pOWFicjB4bHQyaXBna3d3dm52dWoifQ.Jg6B4PEbbNm1dyv3U192sw';

const Map = ({ lat, lng }) => {
    useEffect(() => {
        console.log('lat:', lat);
        console.log('lng:', lng);
      
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: 12,
        });
      
        new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
      
        return () => map.remove();
      }, [lat, lng]);
       

  return (
    <div id="map" style={{ width: '100%', maxWidth: '600px', height: '300px', margin: '0 auto' }}>
    </div>
  );
};

export default Map;
