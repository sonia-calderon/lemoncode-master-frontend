import * as React from 'react';
import { Pagination, Stack } from '@mui/material';

interface Props {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

export const PaginationComponent: React.FunctionComponent<Props> = (props) => {
  const { count, page, onChange } = props;

  return (
    <Stack
      spacing={2}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Pagination
        count={count}
        page={page}
        onChange={(_, value) => onChange(value)}
        color="primary"
      />
    </Stack>
  );
};
