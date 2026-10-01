import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { linkRoutes } from '#core/router/routes.js';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to={linkRoutes.characterCollection} className={classes.backLink}>
          ← Back to characters
        </Link>
        {character && (
          <Card className={classes.card}>
            <CardMedia
              component="img"
              image={character.image}
              alt={character.name}
              className={classes.image}
            />

            <div className={classes.content}>
              <div className={classes.header}>
                <Typography component="h1" className={classes.title}>
                  {character.name}
                </Typography>

                <Chip label={character.status} color="primary" size="small" />
              </div>

              <div className={classes.info}>
                <div className={classes.row}>
                  <span className={classes.label}>Species</span>
                  <span className={classes.value}>{character.species}</span>
                </div>

                <div className={classes.row}>
                  <span className={classes.label}>Gender</span>
                  <span className={classes.value}>{character.gender}</span>
                </div>

                {character.type && (
                  <div className={classes.row}>
                    <span className={classes.label}>Type</span>
                    <span className={classes.value}>{character.type}</span>
                  </div>
                )}

                <div className={classes.row}>
                  <span className={classes.label}>Origin</span>
                  <span className={classes.value}>{character.origin.name}</span>
                </div>

                <div className={classes.row}>
                  <span className={classes.label}>Location</span>
                  <span className={classes.value}>
                    {character.location.name}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};
