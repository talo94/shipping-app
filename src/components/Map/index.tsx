import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Map = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const containerStyle = {
    width: "80%",
    height: "400px",
  };

  const defaultCenter = {
    lat: 19.429995,
    lng: -99.215664,
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
