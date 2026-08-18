import Link from 'next/link';
import { AmenityIcon } from './amenityIcon.component';
import * as viewModel from './house.vm';
import { BookButton } from './bookButton.component';

interface Props {
  house: viewModel.House;
}

export const House: React.FC<Props> = (props) => {
  const { house } = props;

  return (
    <section className="flex flex-col gap-6 pb-48">
      {/* Back nav */}
      <div>
        <Link href="/houses" className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path stroke-dasharray="20" d="M21 12h-17.5">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="20;0"
                />
              </path>
              <path
                stroke-dasharray="12"
                stroke-dashoffset="12"
                d="M3 12l7 7M3 12l7 -7"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.3s"
                  dur="0.2s"
                  to="0"
                />
              </path>
            </g>
          </svg>
          <span>Volver al listado</span>
        </Link>
      </div>
      {/* Imagen principal */}
      <div>
        <img
          src={house.image}
          alt={house.name}
          className="rounded-2xl w-full max-h-96 object-cover"
        />
      </div>
      {/* Contenido + reserva */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Información */}
        <aside className="flex flex-col gap-6 lg:col-span-2 ">
          {/* Información principal */}
          <div className="flex flex-col gap-3 border-b border-neutral/10 pb-5">
            {/* Nombre */}
            <h2 className="text-3xl font-display font-bold text-primary">
              {house.name}
            </h2>

            {/* Ubicación */}
            <div className="flex items-center gap-1.5 text-sm text-neutral">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
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
              <p>
                {house.address}, {house.city}, {house.country}
              </p>
            </div>

            {/* Características */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2zm11-9h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"
                  />
                </svg>
                <span>{house.bedrooms} hab</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"
                    />
                  </svg>
                </span>
                <span>{house.beds} camas</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M5.385 2.75c-.903 0-1.635.732-1.635 1.635v6.865H22a.75.75 0 0 1 0 1.5h-.268q.01.067.014.136q.005.088.004.18v.039c0 .375 0 .595-.016.84c-.142 2.236-1.35 4.302-3.101 5.652l.038.068l1 2a.75.75 0 1 1-1.342.67l-.968-1.935a7.36 7.36 0 0 1-3.228.805h-.007c-.74.028-1.464.045-2.126.045s-1.386-.017-2.126-.045h-.007a7.36 7.36 0 0 1-3.228-.805l-.968 1.935a.75.75 0 1 1-1.342-.67l1-2l.038-.068c-1.751-1.35-2.96-3.416-3.101-5.652a13 13 0 0 1-.016-.84v-.355H2a.75.75 0 0 1 0-1.5h.25V4.385a3.135 3.135 0 0 1 6.046-1.164l.11.275a3.84 3.84 0 0 1 2.466.192a3.97 3.97 0 0 1 2.132 2.213a.75.75 0 0 1-.401.963L6.643 9.43a.75.75 0 0 1-.995-.413a4.18 4.18 0 0 1 .02-3.107a4.1 4.1 0 0 1 1.379-1.774l-.144-.358A1.635 1.635 0 0 0 5.385 2.75m-1.302 10h-.1a.25.25 0 0 0-.233.25v.083c0 .402 0 .574.013.767c.185 2.922 2.695 5.528 5.607 5.823c.195.02.303.023.56.033c.728.027 1.433.044 2.07.044s1.342-.017 2.07-.044c.257-.01.365-.014.56-.034c2.912-.294 5.422-2.9 5.608-5.822c.012-.193.012-.365.012-.767v-.099q0-.003 0 0a.25.25 0 0 0-.234-.233q.002 0 0 0H20l-.082-.001zm6.2-7.682a2.36 2.36 0 0 0-1.976.053a2.57 2.57 0 0 0-1.25 1.354a2.7 2.7 0 0 0-.19 1.226l4.38-1.886a2.4 2.4 0 0 0-.965-.747"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>
                  {house.bathrooms} {house.bathrooms > 1 ? 'baños' : 'baño'}
                </span>
              </div>
            </div>

            {/* Descripción */}
            <p className="max-w-2xl text-md text-neutral">
              {house.description}
            </p>
          </div>

          {/* Servicios */}
          <div className="flex flex-col gap-3 border-b border-neutral/10 pb-5">
            <h5 className="text-2xl font-display font-semibold text-primary">
              Servicios Destacados
            </h5>

            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {house.amenities.map((amenity) => (
                <li
                  key={amenity}
                  className="flex h-12 flex-col items-center justify-center gap-1 rounded-lg bg-white/60 px-2 text-center text-[10px] text-primary transition-colors"
                >
                  {/* Icono */}
                  <AmenityIcon amenity={amenity} />

                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opiniones */}
          <div className="flex flex-col gap-3  pb-5">
            <h5 className="text-2xl font-display font-semibold text-primary">
              Opiniones de huéspedes
            </h5>

            <div className="flex flex-col gap-3">
              {house.reviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-2xl border border-white bg-white/50 p-4"
                >
                  <div className="flex gap-3">
                    {/* Avatar */}
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10  font-medium text-primary">
                      {review.author.slice(0, 1).toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium text-primary">
                            {review.author}
                          </p>
                          <p className="text-sm text-neutral">{review.date}</p>
                        </div>

                        {/* Valoración */}
                        <div className="flex items-center gap-0.5 text-lg  text-primary">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                fill="currentColor"
                                d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                              />
                            </svg>
                          </span>
                          <span>{review.rating}</span>
                        </div>
                      </div>

                      <p className="mt-2 leading-relaxed text-neutral">
                        "{review.comment}"
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </aside>

        {/* Reserva */}
        <aside
          className="fixed bottom-0 left-0 z-50 w-full
            border-t border-neutral/10 bg-white p-3 shadow-lg

            lg:sticky lg:top-6 lg:bottom-auto
            lg:h-fit lg:border-0 lg:bg-transparent
            lg:p-0 lg:shadow-none"
        >
          <div
            className="
              mx-auto flex w-full max-w-xl items-center justify-between gap-4
              rounded-xl bg-white p-4 shadow-sm ring-1 ring-neutral/10

              lg:block lg:p-4
            "
          >
            {/* Precio */}
            <div className="flex items-baseline gap-1 lg:mb-4">
              <span className="font-display text-2xl font-bold text-primary">
                {house.price}€
              </span>
              <span className="text-[10px] text-neutral">/ noche</span>
            </div>

            {/* Botón */}
            <BookButton house={house} />
          </div>
        </aside>
      </div>
    </section>
  );
};
