export type TypesCities = {
  location: Location;
  name: string;
};

export type CitiesType = TypesCities[];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};
