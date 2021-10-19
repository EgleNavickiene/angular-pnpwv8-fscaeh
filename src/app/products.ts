export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    photo: 'https://lt3.pigugroup.eu/colours/456/239/33/45623933/apple-iphone-13-128gb-blue_xbig.jpg'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    photo: 'https://lt1.pigugroup.eu/colours/347/381/66/34738166/apple-iphone-12-mini-64gb-white-kaina_xbig.jpg'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    photo: 'https://lt2.pigugroup.eu/colours/314/919/26/31491926/apple-iphone-se-2020-128gb-black-price_xbig.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/