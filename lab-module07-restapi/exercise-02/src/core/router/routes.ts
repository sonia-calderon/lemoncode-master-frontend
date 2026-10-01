import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  character: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  character: '/characters/:id',
};

interface LinkRoutes extends Omit<SwitchRoutes, 'character'> {
  character: (id: number) => string;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  character: (id) => generatePath(switchRoutes.character, { id: String(id) }),
};
