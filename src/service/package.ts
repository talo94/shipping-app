export interface locationSchema {
  lat: number;
  lng: number;
}

export interface statusSchema {
  type: string;
  date: Date;
  location: locationSchema;
}

export interface packageSchema {
  guideNumber: string;
  origin: string;
  destination: string;
  weight: number;
  date: Date;
  statusList: statusSchema[];
}

const API = process.env.SHIPPING_API_URL;

export const endpoints = {
  packages: {
    getPackages: `${API}/api/package`,
    getPackage: (guideNumber: string) => `${API}/api/package/${guideNumber}`,
    createPackage: `${API}/api/package`,
    updatePackage: (guideNumber: string) => `${API}/api/package/${guideNumber}`,
    deletePackage: (guideNumber: string) => `${API}/api/package/${guideNumber}`,
  },
};
