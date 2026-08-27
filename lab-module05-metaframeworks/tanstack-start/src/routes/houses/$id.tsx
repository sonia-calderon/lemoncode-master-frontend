import { api, House, mapHouseFromApiToVm } from '#pods/house';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/houses/$id')({
  loader: async ({ params }) => {
    return api.getHouse({
      data: { id: params.id },
    });
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `Rurall - ${loaderData?.name}` }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const house = Route.useLoaderData();
  return <House house={mapHouseFromApiToVm(house)} />;
}
