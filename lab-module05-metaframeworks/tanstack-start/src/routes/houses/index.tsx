import { createFileRoute } from '@tanstack/react-router';
import { api, HouseList, mapHouseListFromApiToVm } from '#pods/house-list';
import { Filters } from '#pods/house-list/filters.component.js';

export const Route = createFileRoute('/houses/')({
  head: () => ({
    meta: [{ title: 'Rurall - Refugios Rurales' }],
  }),
  validateSearch: (search: { search?: string }) => ({
    search: search.search ?? '',
  }),
  loader: () => api.getHouseList(),
  staleTime: 10_000,
  component: RouteComponent,
});

function RouteComponent() {
  const { search } = Route.useSearch();
  const houses = Route.useLoaderData();

  const filteredHouseList = houses.filter((house) => {
    if (!search) return true;

    const query = search.toLowerCase();

    return (
      house.name.toLowerCase().includes(query) ||
      house.city.toLowerCase().includes(query) ||
      house.country.toLowerCase().includes(query) ||
      house.address.toLowerCase().includes(query)
    );
  });

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

        <Filters />
      </section>

      <section className="flex flex-col gap-5">
        <h3 className="text-xl font-display font-bold text-primary sm:text-2xl">
          Nuestras recomendaciones
        </h3>
        <HouseList houseList={mapHouseListFromApiToVm(filteredHouseList)} />
      </section>
    </div>
  );
}
