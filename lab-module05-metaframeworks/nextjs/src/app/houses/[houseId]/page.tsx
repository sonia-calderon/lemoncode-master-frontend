import { api as houseApi, House, mapHouseFromApiToVm } from '#pods/house';
import { api as houseListApi } from '#pods/house-list';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ houseId: string }>;
}

export async function generateStaticParams() {
  const houseList = await houseListApi.getHouseList();

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
  const house = await houseApi.getHouse(params.houseId);
  const houseVm = mapHouseFromApiToVm(house);

  return (
    <>
      <House house={houseVm} />
    </>
  );
};

export default HousePage;
