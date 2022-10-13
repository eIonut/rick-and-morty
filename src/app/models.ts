export interface Character {
  id?: number;
  image?: string;
  location?: {name: string; url: string};
  name?: string;
  origin?: {name: string; url: string};
  species?: string;
  status?: string;
  gender?: string;
  episode: [];
}

export interface APIResponse<T> {
  results: Array<T>;
  info: {pages: number; next?: string; previous?: string; count: number; nextUrl: string};
}
