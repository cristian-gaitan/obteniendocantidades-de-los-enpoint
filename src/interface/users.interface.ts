export interface User {
  id: number;
  name: string;
  username: string;
  email?: string | null;
  address?: Address | null;
  phone?: string | null;
  website?: string | null;
  company?: Company | null;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
