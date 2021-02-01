import React from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const {
    servers: { selected }
  } = useSelector(state => state);

  const mapStyles = {
    height: '30vh',
    width: '100%'
  };

  return (
    <LoadScript
      data-test="mapcontainer-component"
      googleMapsApiKey="AIzaSyAaRaX8dprnkXd9FPBuSnK0l1BF-ORgOh4"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={1}
        center={selected[0].location}
      >
        <Marker position={selected[0].location} />
      </GoogleMap>
    </LoadScript>
  );
};

export { MapContainer as default };
