'use client';
import * as api from './api';
import * as viewModel from './house.vm';
import { mapHouseFromVmToApi } from './house.mappers';
import React from 'react';

interface Props {
  house: viewModel.House;
}

export const BookButton: React.FC<Props> = (props) => {
  const { house } = props;

  const [isBooked, setIsBooked] = React.useState(house.isBooked);

  const handleBook = async () => {
    try {
      const updatedHouse = mapHouseFromVmToApi({
        ...house,
        isBooked: !isBooked,
      });
      await api.bookHouse(updatedHouse);
      setIsBooked(updatedHouse.isBooked);
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <>
      <button
        type="button"
        className="
                w-full rounded-md bg-tertiary px-4 py-2.5
                font-medium text-secondary
                transition-colors hover:bg-tertiary/90
                lg:mt-3
              "
        onClick={handleBook}
      >
        {isBooked ? 'Descartar reserva' : 'Reservar'}
      </button>
    </>
  );
};
