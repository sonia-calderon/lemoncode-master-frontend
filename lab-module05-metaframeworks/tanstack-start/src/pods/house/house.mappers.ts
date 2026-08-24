import { ENV } from '#core/constants';
import * as apiModel from './api';
import * as viewModel from './house.vm';

export const mapHouseFromApiToVm = (house: apiModel.House): viewModel.House =>
  Boolean(house)
    ? {
        id: house.id,
        name: house.name,
        description: house.description,
        address: house.address,
        city: house.city,
        country: house.country,
        bedrooms: house.bedrooms,
        beds: house.beds,
        bathrooms: house.bathrooms,
        price: house.price,
        image: `${ENV.BASE_PICTURES_URL}${house.image}`,
        amenities: house.amenities,
        reviews: house.reviews,
        isBooked: house.isBooked,
      }
    : viewModel.createEmptyHouse();

export const mapHouseFromVmToApi = (
  house: viewModel.House
): apiModel.House => ({
  id: house.id,
  name: house.name,
  description: house.description,
  address: house.address,
  city: house.city,
  country: house.country,
  bedrooms: house.bedrooms,
  beds: house.beds,
  bathrooms: house.bathrooms,
  price: house.price,
  image: `${ENV.BASE_PICTURES_URL}${house.image}`,
  amenities: house.amenities,
  reviews: [],
  isBooked: house.isBooked,
});
