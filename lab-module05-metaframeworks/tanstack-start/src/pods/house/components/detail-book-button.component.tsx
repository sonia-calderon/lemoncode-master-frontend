import React from 'react';
import * as api from '../api';
import * as viewModel from '../house.vm';
import { mapHouseFromVmToApi } from '../house.mappers';
import { useRouter } from '@tanstack/react-router';

interface Props {
  house: viewModel.House;
}

export const BookButton: React.FC<Props> = (props) => {
  const router = useRouter();

  const { house } = props;
  const [booked, setBooked] = React.useState(house.isBooked);

  const handleBook = async () => {
    try {
      const apiHouse = mapHouseFromVmToApi({
        ...house,
        isBooked: !booked,
      });
      await api.bookHouse({ data: apiHouse });
      setBooked(apiHouse.isBooked);
      await router.invalidate();
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <>
      <button
        type="button"
        className={` ${booked ? 'bg-tertiary hover:bg-tertiary/90' : 'bg-primary hover:bg-primary/90'} w-full rounded-xl px-4 py-2.5 text-sm font-medium text-secondary shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.99] sm:text-base`}
        onClick={handleBook}
      >
        {booked ? 'Descartar reserva' : 'Reservar'}
      </button>
    </>
  );
};
