import { api, House, mapHouseFromApiToVm } from '#pods/house';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/houses/$id')({
  loader: ({ params }) => api.getHouse({ data: { id: params.id } }),
  staleTime: 0,
  head: ({ loaderData }) => ({
    meta: [{ title: `Rurall - ${loaderData?.name}` }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const house = Route.useLoaderData();
  return <House house={mapHouseFromApiToVm(house)} />;
}
