import * as React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, totalPages, loadCharacterCollection } =
    useCharacterCollection();

  const [page, setPage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    loadCharacterCollection(page, searchValue);
  }, [page, searchValue]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = async (value: string) => {
    setSearchValue(value);
    setPage(1);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      totalPages={totalPages}
      page={page}
      onPageChange={handlePageChange}
      searchValue={searchValue}
      onSearch={handleSearch}
    />
  );
};
