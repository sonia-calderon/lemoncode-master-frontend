import { AmenityIcon } from './amenity-icon.component';
import * as viewModel from '../house.vm';

interface Props {
  house: viewModel.House;
}

export const Services: React.FC<Props> = (props) => {
  const { house } = props;
  return (
    <div className="flex flex-col gap-4 border-b border-neutral/10 pb-6">
      <h5 className="text-2xl font-display font-semibold text-primary">
        Servicios Destacados
      </h5>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {house.amenities.map((amenity) => (
          <li
            key={amenity}
            className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl bg-white/60 px-2 py-2 text-center text-xs text-primary transition-colors"
          >
            {/* Icono */}
            <AmenityIcon amenity={amenity} />

            <span>{amenity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
