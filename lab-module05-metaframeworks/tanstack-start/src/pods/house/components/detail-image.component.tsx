import { Image } from '@unpic/react';
import * as viewModel from '../house.vm';

interface Props {
  house: viewModel.House;
}

export const DetailImage: React.FC<Props> = (props) => {
  const { house } = props;
  return (
    <div className="relative aspect-16/8 w-full overflow-hidden rounded-2xl sm:aspect-16/7 lg:aspect-16/6">
      <Image
        src={house.image}
        alt={house.name}
        layout="fullWidth"
        className="h-full w-full object-cover"
        sizes="(max-width: 640px) 100vw, 100vw"
      />
    </div>
  );
};
