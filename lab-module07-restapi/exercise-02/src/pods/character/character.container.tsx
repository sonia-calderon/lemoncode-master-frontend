import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { Lookup } from '#common/models';
import { CharacterComponent } from './character.component';

interface Props {
  id: number;
}

export const CharacterContainer: React.FunctionComponent<Props> = (props) => {
  const { id } = props;
  const [character, setCharacter] = React.useState<Character>();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, [id]);

  return <CharacterComponent character={character} />;
};
