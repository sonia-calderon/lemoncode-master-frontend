import { BookButton } from './detail-book-button.component';
import * as viewModel from '../house.vm';

interface Props {
  house: viewModel.House;
}

export const BookAside: React.FC<Props> = (props) => {
  const { house } = props;
  return (
    <aside
      className="
              fixed inset-x-0 bottom-0 z-50
              border-t border-neutral/10
              bg-secondary/95 p-3 backdrop-blur-md
              lg:sticky lg:top-6 lg:inset-auto
              lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
    >
      <div
        className="
                mx-auto flex w-full max-w-xl items-center justify-between gap-4
                lg:block
                lg:rounded-2xl
                lg:bg-white/70
                lg:p-5
                lg:shadow-sm
                lg:ring-1 lg:ring-neutral/10
              "
      >
        {/* Precio */}
        <div className="flex shrink-0 items-baseline gap-1 lg:mb-5">
          <span className="font-display text-xl font-bold text-primary sm:text-2xl">
            {house.price}€
          </span>
          <span className="text-xs text-neutral">/ noche</span>
        </div>

        {/* Botón */}
        <BookButton house={house} />
      </div>
    </aside>
  );
};
