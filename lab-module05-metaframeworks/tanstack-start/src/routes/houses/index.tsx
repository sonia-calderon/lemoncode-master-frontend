import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';

const getCarList = async () =>
  await fetch('api/houses').then((response) => response.json());

export const Route = createFileRoute('/houses/')({
  loader: () => getCarList(),
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const houses = Route.useLoaderData();

  return (
    <>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <Link to="/houses/$id" params={{ id: house.id }}>
              {house.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate({ to: '/' })}>Go back to home</button>
    </>
  );
}
