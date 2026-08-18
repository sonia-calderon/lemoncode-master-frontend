import { api, HouseList, mapHouseListFromApiToVm } from '#pods/house-list';
import { Filters } from '#pods/house-list/filters.component';

const HouseListPage = async () => {
  const houseList = await api.getHouseList({
    cache: 'no-store',
  });
  console.log('House list at build time:', { houseList });
  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="text-2xl font-display font-bold text-primary sm:text-3xl">
            Encuentra tu refugio en la naturaleza
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base">
            Descubre casas rurales únicas, diseñadas para desconectar y
            reconectar con lo esencial.
          </p>
        </div>

        <Filters />
      </section>

      <section className="flex flex-col gap-5">
        <h3 className="text-xl font-display font-bold text-primary sm:text-2xl">
          Nuestras recomendaciones
        </h3>
        <HouseList houseList={mapHouseListFromApiToVm(houseList)} />
      </section>
    </>
  );
};

export default HouseListPage;
