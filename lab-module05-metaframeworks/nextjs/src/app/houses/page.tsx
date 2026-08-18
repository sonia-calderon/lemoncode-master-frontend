import { api, HouseList, mapHouseListFromApiToVm } from '#pods/house-list';
import { Filters } from '#pods/house-list/filters.component';

const HouseListPage = async () => {
  const houseList = await api.getHouseList({
    next: { revalidate: 60 },
  });
  console.log('House list at build time:', { houseList });
  return (
    <>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <h2 className="text-3xl font-display font-bold text-primary">
            Encuentra tu refugio en la naturaleza
          </h2>
          <p>
            Descubre casas rurales únicas, diseñadas para desconectar y
            reconectar con lo esencial.
          </p>
        </div>

        <Filters />
      </section>
      <section className="flex flex-col gap-6">
        <h3 className="text-2xl font-display font-bold text-primary">
          Nuestras recomendaciones
        </h3>
        <HouseList houseList={mapHouseListFromApiToVm(houseList)} />
      </section>
    </>
  );
};

export default HouseListPage;
