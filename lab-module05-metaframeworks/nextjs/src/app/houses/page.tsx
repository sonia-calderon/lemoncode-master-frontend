import { api, HouseList, mapHouseListFromApiToVm } from '#pods/house-list';

const HouseListPage = async () => {
  const houseList = await api.getHouseList();
  console.log('House list at build time:', { houseList });
  return (
    <>
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-display font-bold text-primary">
          Nuestras recomendaciones
        </h2>
        <HouseList houseList={mapHouseListFromApiToVm(houseList)} />
      </section>
    </>
  );
};

export default HouseListPage;
