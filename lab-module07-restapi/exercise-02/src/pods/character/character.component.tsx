import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { formValidation } from './character.validations';
import { linkRoutes } from '#core/router/routes.js';
import { Box, Button, TextField, Snackbar, Alert } from '@mui/material';
import { Form, Formik, Field } from 'formik';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
  showSnackbar: boolean;
  onCloseSnackbar: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave, showSnackbar, onCloseSnackbar } = props;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Link
            to={linkRoutes.characterCollection}
            className={classes.backLink}
          >
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
                    <span className={classes.value}>
                      {character.origin.name}
                    </span>
                  </div>

                  <div className={classes.row}>
                    <span className={classes.label}>Location</span>
                    <span className={classes.value}>
                      {character.location.name}
                    </span>
                  </div>

                  <Formik
                    initialValues={{
                      bestSentence: character.bestSentence ?? '',
                    }}
                    validate={formValidation.validateForm}
                    onSubmit={(values) => {
                      onSave({
                        ...character,
                        bestSentence: values.bestSentence,
                      });
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            mt: 2,
                          }}
                        >
                          <Field name="bestSentence">
                            {({ field }: any) => (
                              <TextField
                                {...field}
                                label="Best Sentence"
                                multiline
                                rows={3}
                                fullWidth
                                error={
                                  touched.bestSentence &&
                                  Boolean(errors.bestSentence)
                                }
                                helperText={
                                  touched.bestSentence
                                    ? errors.bestSentence
                                    : ''
                                }
                              />
                            )}
                          </Field>
                          <Button type="submit" variant="contained">
                            Save
                          </Button>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={onCloseSnackbar}
      >
        <Alert
          onClose={onCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Best sentence saved successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
