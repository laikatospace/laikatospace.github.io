import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from 'common/Container';
import NotFoundIllustration from 'svg/illustrations/NotFound';

const NotFound = () => {
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
      bgcolor={theme.palette.alternate.main}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item container justifyContent={'center'} xs={12} md={6}>
            <Box
              height={'100%'}
              width={'100%'}
              maxWidth={{ xs: 500, md: '100%' }}
            >
              <NotFoundIllustration width={'100%'} height={'100%'} />
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
                variant="h1"
                component={'h1'}
                align={isMd ? 'left' : 'center'}
                sx={{ fontWeight: 700 }}
              >
                404
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="textSecondary"
                align={isMd ? 'left' : 'center'}
              >
                Oops! Looks like you followed a bad link.
                <br />
                If you think this is a problem with us, please{' '}
                <Link href={'#0'} underline="none">
                  tell us
                </Link>
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
                  Back home
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotFound;
