export type ProductType = {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  img: string;
};

export type ProductPropsType = {
  item: ProductType;
};

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  eyeColor: string;
  address: {
    address: string;
    state: string;
    city: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  university: string;
  macAddress: string;
};
