import { api, House, mapHouseFromApiToVm } from '#pods/house';
import { Metadata } from 'next';
import React from 'react';

interface Props {
  params: Promise<{ houseId: string }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const house = await api.getHouse(params.houseId);
  return {
    title: `Rent a house - House ${house.name} details`,
  };
};

const HousePage = async (props: Props) => {
  const params = await props.params;
  console.log('ID:', params.houseId);

  const house = await api.getHouse(params.houseId);
  console.log('API:', house);

  const houseVm = mapHouseFromApiToVm(house);

  console.log('VM:', houseVm);

  return (
    <>
      <House house={mapHouseFromApiToVm(house)} />
    </>
  );
};

export default HousePage;
