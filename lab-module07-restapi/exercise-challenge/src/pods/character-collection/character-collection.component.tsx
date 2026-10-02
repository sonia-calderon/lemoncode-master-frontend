import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Searchbar } from './components/searchbar.component';

interface Props {
  characterCollection: CharacterEntityVm[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection } = props;

  const [searchValue, setSearchValue] = React.useState('');
  const [characters, setCharacters] = React.useState<CharacterEntityVm[]>([]);

  React.useEffect(() => {
    setCharacters(characterCollection);
  }, [characterCollection]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchValue(value);

    if (!value.trim()) {
      setCharacters(characterCollection);
      return;
    }

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}`
    );

    if (!response.ok) {
      setCharacters(characterCollection);
      return;
    }

    const data = await response.json();

    setCharacters(data.results);
  };

  return (
    <div className={classes.root}>
      <Searchbar value={searchValue} onChange={handleSearch} />
      <ul className={classes.list}>
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};
