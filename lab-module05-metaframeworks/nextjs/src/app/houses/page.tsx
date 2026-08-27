import { api, HouseList, mapHouseListFromApiToVm } from '#pods/house-list';
import { Filters } from '#pods/house-list/filters.component';

interface Props {
  searchParams: Promise<{
    search?: string;
  }>;
}

const normalizeText = (text: string) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

const HouseListPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const search = normalizeText(params.search ?? '');

  const houseList = await api.getHouseList({
    next: { revalidate: 10 },
  });

  const filteredHouseList = houseList.filter((house) => {
    if (!search) return true;

    return (
      normalizeText(house.name).includes(search) ||
      normalizeText(house.city).includes(search) ||
      normalizeText(house.country).includes(search) ||
      normalizeText(house.address).includes(search)
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
};

export default HouseListPage;
