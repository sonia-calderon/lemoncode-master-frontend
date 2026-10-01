import * as React from 'react';
import { AppLayout } from '#layouts';
import { CharacterContainer } from '#pods/character/index.js';
import { useParams } from 'react-router-dom';

export const CharacterScene = () => {
  const { id } = useParams<{ id: string }>();
  const characterId = id ? parseInt(id, 10) : 0;

  return (
    <AppLayout>
      <CharacterContainer id={characterId} />
    </AppLayout>
  );
};
