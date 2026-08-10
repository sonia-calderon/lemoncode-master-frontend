import Image from 'next/image';
import React from 'react';

const HouseListPage = () => {
  return (
    <>
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-display font-bold text-primary">
          Nuestras recomendaciones
        </h2>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
          <li className="flex flex-col gap-2  rounded-2xl">
            <div className="flex w-full ">
              <img src="/casa-asturias.jpg" alt="" className="rounded-2xl" />
            </div>
            <div className="flex justify-between py-4">
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-display text-primary font-bold">
                  El Olivar
                </h5>
                <div className="flex items-center text-neutral">
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
                  <p>Andalucía, Espana</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-bold text-xl font-display">
                  120${' '}
                  <span className="text-xs font-sans font-normal">/noche</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-full rounded-2xl bg-primary px-2 py-3 text-secondary text-center hover:bg-primary/85">
                Reservar
              </button>
            </div>
          </li>
          <li className="flex flex-col gap-2  rounded-2xl">
            <div className="flex w-full ">
              <img src="/casa-asturias.jpg" alt="" className="rounded-2xl" />
            </div>
            <div className="flex justify-between py-4">
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-display text-primary font-bold">
                  El Olivar
                </h5>
                <div className="flex items-center text-neutral">
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
                  <p>Andalucía, Espana</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-bold text-xl font-display">
                  120${' '}
                  <span className="text-xs font-sans font-normal">/noche</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center rounded-2xl bg-primary px-2 py-3 text-secondary text-center">
              <button>Reservar</button>
            </div>
          </li>
          <li className="flex flex-col gap-2  rounded-2xl">
            <div className="flex w-full ">
              <img src="/casa-asturias.jpg" alt="" className="rounded-2xl" />
            </div>
            <div className="flex justify-between py-4">
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-display text-primary font-bold">
                  El Olivar
                </h5>
                <div className="flex items-center text-neutral">
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
                  <p>Andalucía, Espana</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-bold text-xl font-display">
                  120${' '}
                  <span className="text-xs font-sans font-normal">/noche</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center rounded-2xl bg-primary px-2 py-3 text-secondary text-center">
              <button>Reservar</button>
            </div>
          </li>
          <li className="flex flex-col gap-2  rounded-2xl">
            <div className="flex w-full ">
              <img src="/casa-asturias.jpg" alt="" className="rounded-2xl" />
            </div>
            <div className="flex justify-between py-4">
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-display text-primary font-bold">
                  El Olivar
                </h5>
                <div className="flex items-center text-neutral">
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
                  <p>Andalucía, Espana</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-bold text-xl font-display">
                  120${' '}
                  <span className="text-xs font-sans font-normal">/noche</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center rounded-2xl bg-primary px-2 py-3 text-secondary text-center">
              <button>Reservar</button>
            </div>
          </li>
          <li className="flex flex-col gap-2  rounded-2xl">
            <div className="flex w-full ">
              <img src="/casa-asturias.jpg" alt="" className="rounded-2xl" />
            </div>
            <div className="flex justify-between py-4">
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-display text-primary font-bold">
                  El Olivar
                </h5>
                <div className="flex items-center text-neutral">
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
                  <p>Andalucía, Espana</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-bold text-xl font-display">
                  120${' '}
                  <span className="text-xs font-sans font-normal">/noche</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center rounded-2xl bg-primary px-2 py-3 text-secondary text-center">
              <button>Reservar</button>
            </div>
          </li>
          <li className="flex flex-col gap-2  rounded-2xl">
            <div className="flex w-full ">
              <img src="/casa-asturias.jpg" alt="" className="rounded-2xl" />
            </div>
            <div className="flex justify-between py-4">
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-display text-primary font-bold">
                  El Olivar
                </h5>
                <div className="flex items-center text-neutral">
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
                  <p>Andalucía, Espana</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-bold text-xl font-display">
                  120${' '}
                  <span className="text-xs font-sans font-normal">/noche</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center rounded-2xl bg-primary px-2 py-3 text-secondary text-center">
              <button>Reservar</button>
            </div>
          </li>
          <li className="flex flex-col gap-2  rounded-2xl">
            <div className="flex w-full ">
              <img src="/casa-asturias.jpg" alt="" className="rounded-2xl" />
            </div>
            <div className="flex justify-between py-4">
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-display text-primary font-bold">
                  El Olivar
                </h5>
                <div className="flex items-center text-neutral">
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
                  <p>Andalucía, Espana</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-bold text-xl font-display">
                  120${' '}
                  <span className="text-xs font-sans font-normal">/noche</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center rounded-2xl bg-primary px-2 py-3 text-secondary text-center">
              <button>Reservar</button>
            </div>
          </li>
          <li className="flex flex-col gap-2  rounded-2xl">
            <div className="flex w-full ">
              <img src="/casa-asturias.jpg" alt="" className="rounded-2xl" />
            </div>
            <div className="flex justify-between py-4">
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-display text-primary font-bold">
                  El Olivar
                </h5>
                <div className="flex items-center text-neutral">
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
                  <p>Andalucía, Espana</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-bold text-xl font-display">
                  120${' '}
                  <span className="text-xs font-sans font-normal">/noche</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-full rounded-2xl bg-primary px-2 py-3 text-secondary text-center hover:bg-primary/50">
                Reservar
              </button>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default HouseListPage;
