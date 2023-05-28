import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { locationSchema } from "@/service/package";
import Loading from "../Loader";
type Props = {
  location: locationSchema;
};

const Map = ({ location: { lat, lng } }: Props) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div className="w-11/12 h-[400px]">
      <LoadScript googleMapsApiKey={apiKey} loadingElement={Loading}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={15}
          center={{ lat, lng }}
        >
          <Marker position={{ lat, lng }} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
