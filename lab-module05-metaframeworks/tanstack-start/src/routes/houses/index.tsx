import { createFileRoute } from '@tanstack/react-router';
import { api, HouseList, mapHouseListFromApiToVm } from '#pods/house-list';
import { Filters } from '#pods/house-list/filters.component.js';

const normalizeText = (text: string) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

export const Route = createFileRoute('/houses/')({
  head: () => ({
    meta: [{ title: 'Rurall - Refugios Rurales' }],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    search: typeof search.search === 'string' ? search.search : undefined,
  }),
  loaderDeps: ({ search }) => {
    return {
      search: search.search ?? '',
    };
  },

  loader: async ({ deps }) => {
    const houses = await api.getHouseList();

    if (!deps.search) {
      return houses;
    }

    const query = normalizeText(deps.search);

    return houses.filter(
      (house) =>
        normalizeText(house.name).includes(query) ||
        normalizeText(house.city).includes(query) ||
        normalizeText(house.country).includes(query) ||
        normalizeText(house.address).includes(query)
    );
  },
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

        <Filters />
      </section>

      <section className="flex flex-col gap-5">
        <h3 className="text-xl font-display font-bold text-primary sm:text-2xl">
          Nuestras recomendaciones
        </h3>
        <HouseList houseList={mapHouseListFromApiToVm(houses)} />
      </section>
    </div>
  );
}
