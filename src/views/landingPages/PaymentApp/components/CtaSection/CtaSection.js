import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CtaSection = () => (
  <Box
    display={'flex'}
    justifyContent={'space-between'}
    alignItems={{ xs: 'flex-start', sm: 'center' }}
    flexDirection={{ xs: 'column', sm: 'row' }}
  >
    <Box>
      <Typography fontWeight={700} variant={'h6'} gutterBottom>
        Register today. Banking tomorrow.
      </Typography>
      <Typography>Avoid the nightmare and use our platform.</Typography>
    </Box>
    <Box
      component={Button}
      marginTop={{ xs: 2, sm: 0 }}
      variant="contained"
      size={'large'}
    >
      Get started
    </Box>
  </Box>
);

export default CtaSection;
