import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Link } from 'react-router-dom';
import { linkRoutes } from '#core/router/routes.js';
import { Chip } from '@mui/material';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Link to={linkRoutes.character(character.id)} className={classes.link}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={character.image}
          title={character.name}
          className={classes.media}
        />
        <CardContent className={classes.content}>
          <Typography variant="h5" className={classes.name}>
            {character.name}
          </Typography>
          <Chip
            label={character.status}
            color="primary"
            size="small"
            className={classes.status}
          />

          <Typography variant="body2" className={classes.info}>
            {character.species} · {character.gender}
          </Typography>
          <Typography variant="body2" className={classes.origin}>
            <strong>Origin:</strong> {character.origin.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
