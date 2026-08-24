import { createFileRoute } from '@tanstack/react-router';
import { api, HouseList, mapHouseListFromApiToVm } from '#pods/house-list';

export const Route = createFileRoute('/houses/')({
  head: () => ({
    meta: [{ title: 'Rurall - Refugios Rurales' }],
  }),
  loader: () => api.getHouseList(),
  staleTime: 10_000,
  component: RouteComponent,
});

function RouteComponent() {
  const houses = Route.useLoaderData();

  return (
    <div className="flex flex-col gap-12">
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

        {/* <Filters /> */}
      </section>

      <section className="flex flex-col gap-5">
        <h3 className="text-xl font-display font-bold text-primary sm:text-2xl">
          Nuestras recomendaciones
        </h3>
        <HouseList houseList={mapHouseListFromApiToVm(houses)} />
        {/* <HouseList houseList={mapHouseListFromApiToVm(filteredHouseList)} /> */}
      </section>
    </div>
  );
}
