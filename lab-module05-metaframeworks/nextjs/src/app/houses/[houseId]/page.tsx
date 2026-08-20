import { api as houseApi, House, mapHouseFromApiToVm } from '#pods/house';
import { api as houseListApi } from '#pods/house-list';
import { Metadata } from 'next';
import React from 'react';

interface Props {
  params: Promise<{ houseId: string }>;
}

export async function generateStaticParams() {
  console.log('🏗️ GENERATING STATIC PARAMS');
  const houseList = await houseListApi.getHouseList();

  console.log(
    '🏗️ STATIC HOUSE IDS:',
    houseList.map((house) => house.id)
  );

  return houseList.map((house) => ({
    houseId: house.id,
  }));
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const house = await houseApi.getHouse(params.houseId);
  return {
    title: `Rurall - ${house.name}`,
  };
};

const HousePage = async (props: Props) => {
  const params = await props.params;
  console.log('🏠 HOUSE PAGE:', params.houseId);

  const house = await houseApi.getHouse(params.houseId);
  console.log('🏠 HOUSE API:', house);

  const houseVm = mapHouseFromApiToVm(house);

  console.log('🏠 HOUSE VM:', houseVm);

  return (
    <>
      <House house={houseVm} />
    </>
  );
};

export default HousePage;
