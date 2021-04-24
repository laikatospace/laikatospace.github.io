import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Subscription = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Ready to growth your business?
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Your website is fully responsive so visitors can view your content
          from their choice of device.
        </Typography>
      </Box>
      <Box maxWidth={600} margin={'0 auto'}>
        <Box
          component={'form'}
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiInputBase-input.MuiOutlinedInput-input': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Box
              flex={'1 1 auto'}
              component={TextField}
              label="Enter your email"
              variant="outlined"
              color="primary"
              fullWidth
              height={54}
            />
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              height={54}
              marginTop={{ xs: 1, sm: 0 }}
              marginLeft={{ sm: 2 }}
            >
              Subscribe
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscription;
