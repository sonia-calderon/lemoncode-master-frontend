import * as viewModel from './house.vm';
import { BackNav } from './components/back-nav.component';
import { Services } from './components/detail-services.component';
import { Reviews } from './components/detail-reviews.component';
import { MainInfo } from './components/detail-main-info.component';
import { BookAside } from './components/detail-book-aside.component';
import { DetailImage } from './components/detail-image.component';

interface Props {
  house: viewModel.House;
}

export const House: React.FC<Props> = (props) => {
  const { house } = props;

  return (
    <section className="flex flex-col gap-5 pb-24 sm:gap-6 lg:pb-0">
      <BackNav />
      <DetailImage house={house} />
      {/* Contenido + reserva */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
        {/* Información */}
        <aside className="flex flex-col gap-8 lg:col-span-2 ">
          <MainInfo house={house} />
          <Services house={house} />
          <Reviews house={house} />
        </aside>

        {/* Reserva */}
        <BookAside house={house} />
      </div>
    </section>
  );
};
