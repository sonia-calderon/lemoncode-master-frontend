import React from 'react';
import * as api from './api';
import { Character } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { CharacterComponent } from './character.component';

interface Props {
  id: number;
}

export const CharacterContainer: React.FunctionComponent<Props> = (props) => {
  const { id } = props;
  const [character, setCharacter] = React.useState<Character>();
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, [id]);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveBestSentence(apiCharacter);

    if (success) {
      console.log('Best sentence saved');
      setShowSnackbar(true);
    } else {
      alert('Error on save best sentence');
    }
  };

  return (
    <CharacterComponent
      character={character}
      onSave={handleSave}
      showSnackbar={showSnackbar}
      onCloseSnackbar={() => setShowSnackbar(false)}
    />
  );
};
