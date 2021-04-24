import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Download = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Readmap
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Sync your banking data anywhere.
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Compliance, financial reviews, tax auditing, and any financial task
          has never been easier.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent={'center'}
      >
        <Box
          component={Button}
          variant="outlined"
          color="primary"
          size="large"
          fullWidth={isSm ? false : true}
        >
          Contact sales
        </Box>
        <Box
          component={Button}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isSm ? false : true}
          marginTop={{ xs: 1, sm: 0 }}
          marginLeft={{ sm: 2 }}
        >
          Download
        </Box>
      </Box>
    </Box>
  );
};

export default Download;
