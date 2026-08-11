import { mapToCollection } from '#common/mappers';
import { ENV } from '#core/constants';
import * as apiModel from './api';
import * as viewModel from './house-list.vm';

export const mapHouseListFromApiToVm = (
  houseList: apiModel.House[]
): viewModel.House[] => mapToCollection(houseList, mapHouseFromApiToVm);

const mapHouseFromApiToVm = (house: apiModel.House): viewModel.House => ({
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
});
