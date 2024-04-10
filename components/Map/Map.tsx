import { useEffect, useRef } from "react";
import mapboxgl, { Map as MapboxMap } from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHNwMjgxMCIsImEiOiJjbG1pOWR0N28wYjgxM2Vxc3R3bTJtd3RzIn0.wCdQEqsxHCrMQNP_FJ0TgA"; // Replace with your Mapbox API token

const Map = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<MapboxMap | null>(null);

  useEffect(() => {
    if (mapContainer.current) {
      mapInstance.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // Replace with your desired map style
        center: [-73.98568, 40.748817], // Replace with your desired initial coordinates
        zoom: 12, // Adjust the initial zoom level as needed
      });

      // Add additional map configuration and features here
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "100%", borderRadius: "3rem" }}
    />
  );
};

export default Map;
