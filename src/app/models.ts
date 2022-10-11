export interface Character {
  id: number;
  image: string;
  location: {name: string; url: string};
  name: string;
  origin: Array<Origin>;
  species: string;
  status: string;
  gender: string;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Location {
  locations: {
    name: string;
    url: string;
  }
}

interface Origin {
  name: string;
  url: string;
}
