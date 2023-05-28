import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { locationSchema } from "@/service/package";
import io from "socket.io-client";

type Props = {
  location: locationSchema;
};

const Map = ({ location: { lat, lng } }: Props) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const containerStyle = {
    width: "80%",
    height: "400px",
  };

  const defaultCenter = {
    lat: 19.429995,
    lng: -99.215664,
  };

  const [packageLocation, setPackageLocation] = useState(defaultCenter);
  const socket = io("http://localhost:3000");

  useEffect(() => {
    socket.on("newStatus", ({ lat, lng }: any) => {
      setPackageLocation({ lat, lng });
    });
    return () => {
      socket.off("actualizacionEstado");
    };
  }, [socket]);

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
