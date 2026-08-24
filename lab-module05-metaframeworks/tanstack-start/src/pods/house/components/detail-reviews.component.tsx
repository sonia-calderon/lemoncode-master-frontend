import * as viewModel from '../house.vm';

interface Props {
  house: viewModel.House;
}

export const Reviews: React.FC<Props> = (props) => {
  const { house } = props;
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-2xl font-display font-semibold text-primary">
        Opiniones de huéspedes
      </h5>

      <div className="flex flex-col gap-4">
        {house.reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-2xl border border-neutral/10 bg-white/50 p-4 sm:p-5"
          >
            <div className="flex gap-3 sm:gap-4">
              {/* Avatar */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {review.author.slice(0, 1).toUpperCase()}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <p className="font-medium text-primary">{review.author}</p>
                    <p className="text-sm text-neutral">{review.date}</p>
                  </div>

                  {/* Valoración */}
                  <div className="flex items-center gap-1 text-sm font-medium  text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path d="m12 2 2.8 6.625 7.2.625-5.45 4.725L18.175 21 12 17.275 5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2Z" />
                    </svg>

                    <span>{review.rating}</span>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                  "{review.comment}"
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
