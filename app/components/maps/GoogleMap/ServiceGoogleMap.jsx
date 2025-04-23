'use client';
import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { SERVICES_LOCATIONS } from '../../../data/DUMMY_DATA';
import { containerStyle, createCustomMarkerIcon, mapStyles } from '../../../../../lib/customGooogleMap';

const ServiceAreaMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAR05-G8DoaMfnw_snPNghoqOJ1WNPR3bU'
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: 43.5, lng: -80.5 }}
      zoom={10}
      options={{
        styles: mapStyles,
        disableDefaultUI: true,
      }}
    >
      {SERVICES_LOCATIONS.map((location) => {
        return (
          <Marker
            key={location.id}
            position={location.position}
            icon={createCustomMarkerIcon(
              location.name,
              true
            )}
          />
        )
      })}
    </GoogleMap>
  );
};

export default React.memo(ServiceAreaMap);