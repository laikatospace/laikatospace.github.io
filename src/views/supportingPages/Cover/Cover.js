import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from 'common/Container';
import GlobeIllustration from 'svg/illustrations/Globe';

const Cover = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      minHeight={'calc(100vh - 64px - 183px)'}
      height={'100%'}
      display={'flex'}
      alignItems={'center'}
      bgcolor={'alternate.main'}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item container justifyContent={'center'} xs={12} md={6}>
            <Box
              height={'100%'}
              width={'100%'}
              maxWidth={{ xs: 500, md: '100%' }}
            >
              <GlobeIllustration width={'100%'} height={'100%'} />
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                variant="h3"
                component={'h3'}
                align={isMd ? 'left' : 'center'}
                sx={{ fontWeight: 700 }}
                gutterBottom
              >
                Trusted by over{' '}
                <Typography
                  component={'span'}
                  variant={'inherit'}
                  color={'secondary'}
                >
                  80,000
                </Typography>{' '}
                people
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="textSecondary"
                align={isMd ? 'left' : 'center'}
                gutterBottom
              >
                We create amazing websites and digital products.
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="textSecondary"
                align={isMd ? 'left' : 'center'}
              >
                We design & develop amazing websites and digital products for
                startups, companies and ourselves.
              </Typography>
              <Box
                marginTop={4}
                display={'flex'}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Button
                  component={Link}
                  variant="contained"
                  color="primary"
                  size="large"
                  href={'/'}
                >
                  Contact us
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cover;
