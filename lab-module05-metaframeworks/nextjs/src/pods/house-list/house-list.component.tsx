import Link from 'next/link';
import { House } from './house-list.vm';
import { routeConstants } from '#core/constants';
import { BookButton } from '#pods/booking';

interface Props {
  houseList: House[];
}

export const HouseList: React.FC<Props> = (props) => {
  const { houseList } = props;
  return (
    <ul className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {houseList.map((house) => (
        <li key={house.id} className="flex flex-col gap-3 rounded-2xl">
          <Link
            href={routeConstants.house(house.id)}
            className="flex flex-col gap-2 h-full"
          >
            <div className="aspect-4/3 w-full overflow-hidden rounded-2xl">
              <img
                src={house.image}
                alt={house.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-start justify-between gap-4 px-1">
              <div className="flex min-w-0 flex-col gap-1.5">
                <h5 className="font-display text-lg font-bold text-primary sm:text-xl">
                  {house.name}
                </h5>
                <div className="flex items-center gap-1 text-sm text-neutral">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </span>
                  <p>
                    {house.city}, {house.country}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="shrink-0 font-display text-lg font-bold text-primary sm:text-xl">
                  {house.price}€
                  <span className="font-sans text-xs font-normal"> /noche</span>
                </p>
              </div>
            </div>
          </Link>
          <div className="flex justify-center pt-1">
            <BookButton houseId={house.id} isBooked={house.isBooked} />
          </div>
        </li>
      ))}
    </ul>
  );
};
