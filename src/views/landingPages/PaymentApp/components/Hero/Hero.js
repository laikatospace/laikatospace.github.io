import React from 'react';
import Typed from 'react-typed';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CreditCardsIllustration from 'svg/illustrations/CreditCards';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              component={'h2'}
              sx={{
                fontWeight: 700,
              }}
            >
              The{' '}
              <Typography
                variant="h2"
                component={'span'}
                color="secondary"
                sx={{
                  fontWeight: 700,
                }}
              >
                <Typed
                  strings={['ideal', 'fastest']}
                  typeSpeed={70}
                  loop={true}
                />
              </Typography>
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
              }}
            >
              pro account for entrepreneurs.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="textSecondary">
              Much more than a bank, it is the ideal, fastest and most
              convenient financial and administrative co-driver to work with
              peace of mind.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              fullWidth={!isMd}
            >
              Contact sales
            </Box>
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={!isMd}
              marginTop={{ xs: 1, sm: 0 }}
              marginLeft={{ sm: 2 }}
            >
              Subscribe
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={'100%'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          <Box
            height={'100%'}
            width={'100%'}
            maxWidth={{ xs: 500, md: '100%' }}
          >
            <CreditCardsIllustration width={'100%'} height={'100%'} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
