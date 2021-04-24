/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Headline = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.common.white,
            }}
          >
            You're in good company.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            color={'primary'}
            sx={{
              fontWeight: 700,
            }}
          >
            Join millions of businesses today.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Headline;
