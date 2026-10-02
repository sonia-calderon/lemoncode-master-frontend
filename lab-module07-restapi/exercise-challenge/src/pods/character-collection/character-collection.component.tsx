import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Searchbar } from './components/searchbar.component';
import { PaginationComponent } from './components/pagination.component';

interface Props {
  characterCollection: CharacterEntityVm[];
  totalPages: number;
  page: number;
  searchValue: string;
  onPageChange: (page: number) => void;
  onSearch: (value: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    totalPages,
    page,
    searchValue,
    onPageChange,
    onSearch,
  } = props;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Searchbar value={searchValue} onChange={handleSearch} />
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
      <PaginationComponent
        count={totalPages}
        page={page}
        onChange={onPageChange}
      />
    </div>
  );
};
