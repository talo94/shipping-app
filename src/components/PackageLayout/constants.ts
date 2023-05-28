import { packageSchema } from "@/service/package";

export const DEFAULT_PACKAGE: packageSchema = {
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

export const defaultCenter = {
  lat: 19.429995,
  lng: -99.215664,
};
