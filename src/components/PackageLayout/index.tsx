import React, { useEffect, useState } from "react";
import Map from "@/components/Map";
import Search from "@/components/Search";
import { packageSchema } from "@/service/package";
import io from "socket.io-client";
import { DEFAULT_PACKAGE, defaultCenter } from "./constants";
import Notification from "@/components/Notification";
import Detail from "../Detail";

const PackageLayout = () => {
  const [packageList, setPackgeList] = useState<packageSchema[] | []>([]);
  const [selected, setSelected] = useState<packageSchema>(DEFAULT_PACKAGE);
  const [packageLocation, setPackageLocation] = useState(defaultCenter);
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState(false);
  const socket = io("http://localhost:3000");

  useEffect(() => {
    fetch("http://localhost:3000/api/package")
      .then((res) => res.json())
      .then(({ data }) => {
        setPackgeList(data);
        setSelected(data[0]);
      })
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    socket.on(
      `newStatus-${selected.guideNumber}`,
      (newPackage: packageSchema) => {
        if (newPackage.guideNumber === selected.guideNumber) {
          findLocation(newPackage);
          setShowNotification(true);
        }
      }
    );
    return () => {
      socket.off("actualizacionEstado");
    };
  }, [socket, selected]);

  const onChangeSelected = (value: packageSchema) => {
    setSelected(value);
    findLocation(value);
  };

  const findLocation = (value: packageSchema) => {
    const index = value.statusList.length - 1;
    setPackageLocation(value.statusList[index].location);
  };

  return (
    <>
      <h1 className="text-2xl mt-10 text-tahiti-800 font-bold">
        Buscador de paquetes
      </h1>
      <Search
        packageList={packageList}
        selectedValue={selected}
        onChange={onChangeSelected}
      />
      <Map location={packageLocation} />
      <Detail selectedValue={selected} />
      {error && <p className="text-red-600">{error}</p>}
      {showNotification && <Notification onClick={setShowNotification} />}
    </>
  );
};

export default PackageLayout;
