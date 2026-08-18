'use client';

import React from 'react';
import { bookHouse } from './api';

interface Props {
  houseId: string;
  isBooked: boolean;
}

export const BookButton: React.FC<Props> = (props) => {
  const { houseId, isBooked } = props;

  const [booked, setBooked] = React.useState(isBooked);

  React.useEffect(() => {
    console.log('BookButton isBooked:', isBooked);
    setBooked(isBooked);
  }, [isBooked]);

  const handleBook = async () => {
    try {
      const newStatus = !booked;

      await bookHouse(houseId, newStatus);
      setBooked(newStatus);
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <>
      <button
        type="button"
        className={` ${booked ? 'bg-tertiary hover:bg-tertiary/90' : 'bg-primary hover:bg-primary/90'}
            w-full rounded-xl px-4 py-2.5
            text-sm font-medium text-secondary
            shadow-sm
            transition-all duration-200
            hover:shadow-md
            active:scale-[0.99]
            sm:text-base
            
            `}
        onClick={handleBook}
      >
        {booked ? 'Descartar reserva' : 'Reservar'}
      </button>
    </>
  );
};
