import * as viewModel from '../house.vm';

interface Props {
  house: viewModel.House;
}

export const DetailImage: React.FC<Props> = (props) => {
  const { house } = props;
  return (
    <div className="aspect-16/8 w-full overflow-hidden rounded-2xl sm:aspect-16/7 lg:aspect-16/6">
      <img
        src={house.image}
        alt={house.name}
        className="h-full w-full object-cover"
      />
    </div>
  );
};
