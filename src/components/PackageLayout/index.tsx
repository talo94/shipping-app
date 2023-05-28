import React, { useEffect, useState } from "react";
import Map from "@/components/Map";
import Search from "@/components/Search";
import { packageSchema } from "@/service/package";
const DEFAULT_PACKAGE: packageSchema = {
  guideNumber: "",
  origin: "",
  destination: "",
  weight: 0,
  date: new Date(),
  statusList: [
    {
      type: "En sucursal",
      date: new Date(),
      location: {
        lat: 19.429995,
        lng: -99.215664,
      },
    },
  ],
};
const defaultCenter = {
  lat: 19.429995,
  lng: -99.215664,
};
const PackageLayout = () => {
  const [packageList, setPackgeList] = useState<packageSchema[] | []>([]);
  const [selected, setSelected] = useState<packageSchema>(DEFAULT_PACKAGE);

  useEffect(() => {
    fetch("http://localhost:3000/api/package")
      .then((res) => res.json())
      .then(({ data }) => {
        setPackgeList(data);
      });
  }, []);
  console.log(selected);
  const loc = selected.statusList.pop();

  return (
    <>
      <h1 className="text-2xl mt-10 text-tahiti-800 font-bold">
        Buscador de paquetes
      </h1>
      <Search
        packageList={packageList}
        selectedValue={selected}
        onChange={setSelected}
      />
      <Map location={loc ? loc.location : defaultCenter} />
    </>
  );
};

export default PackageLayout;
