export type NumStateProps = {
  title: string;
  mainTitle: string;
  imgSrc: string;
};

export type NumState = {
  title: string;
  mainTitle: string;
  imgSrc: string;
};

export type NumStateObjectArray = NumState[]; // Array of NumState objects

export type DeviceData = {
  imgSrc: string;
  title: string;
  percentage: number;
  color: string;
};

export type DeviceDataType = DeviceData[];
