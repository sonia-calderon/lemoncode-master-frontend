import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Link } from 'react-router-dom';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Link to="" style={{ textDecoration: 'none' }}>
      <Card>
        <CardMedia
          image={character.image}
          title={character.name}
          style={{ height: 0, paddingTop: '56.25%' }}
        />
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h5">{character.name}</Typography>
            <Typography variant="subtitle1" gutterBottom>
              {character.status}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {character.species}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
