import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from 'common/Container';
import CloudHostingIllustration from 'svg/illustrations/CloudHosting';

const MaintenanceMode = () => {
  return (
    <Box
      minHeight={'calc(100vh - 64px - 183px)'}
      height={'100%'}
      display={'flex'}
      alignItems={'center'}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item container justifyContent={'center'} xs={12}>
            <Box height={'100%'} width={'100%'} maxWidth={500}>
              <CloudHostingIllustration width={'100%'} height={'100%'} />
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
          >
            <Box>
              <Typography
                variant="h4"
                component={'h4'}
                align={'center'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                We are in maintenance mode
              </Typography>
              <Typography component="p" color="textSecondary" align={'center'}>
                We are working to deliver the cool features ever.
                <br />
                Stay tuned!
              </Typography>
              <Box display={'flex'} justifyContent={'center'} marginTop={2}>
                <Button variant="contained" color="primary" size="large">
                  Check for updates
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MaintenanceMode;
