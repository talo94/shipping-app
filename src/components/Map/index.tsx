import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { locationSchema } from "@/service/package";

type Props = {
  location: locationSchema;
};

const Map = ({ location: { lat, lng } }: Props) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const containerStyle = {
    width: "80%",
    height: "400px",
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        center={{ lat, lng }}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
