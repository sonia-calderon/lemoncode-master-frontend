import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 400,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,

  '&:focus-within': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.15)}`,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',

  '& .MuiInputBase-input': {
    padding: theme.spacing(1.25, 1.5, 1.25, 5),
  },
}));

export const Searchbar: React.FunctionComponent<Props> = (props) => {
  const { value, onChange } = props;

  return (
    <Box component="form" sx={{ width: '100%', mb: 4 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for a character"
          inputProps={{ 'aria-label': 'search' }}
          value={value}
          onChange={onChange}
        />
      </Search>
    </Box>
  );
};
