'use client';
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './ServiceMapBox.module.scss';

const ServiceMapBox = ({ locations, markerClassName, zoom = 10, center = [-80.4764, 43.520] }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_BOX_API_KEY;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      center,
      zoom,
      style: 'mapbox://styles/aymaneldawy/cm9sux9tk00h401qsgcgq0m45',
      // style: 'mapbox://styles/aymaneldawy/cm9t93d9600ax01s54wppbu4m',
    });

    mapRef.current = map;

    map.on('load', () => {

      map.addSource('service-locations', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: locations.map(location => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: location.coordinates
            },
            properties: {
              id: location.id,
              name: location.name,
              label: location.label
            }
          }))
        }
      });

      for (const loc of locations) {
        const el = document.createElement('div');
        el.className = markerClassName || 'marker';
        el.dataset.name = loc.name
        new mapboxgl.Marker(el).setLngLat(loc.coordinates).addTo(map);
      }
    });

    return () => map.remove();
  }, []);

  return (
    <div className={styles.mapBox} >
      <div ref={mapContainerRef} className={styles.mapbox_container} />
    </div>
  );
};

export default ServiceMapBox;