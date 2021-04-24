import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const Hero = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h2"
        align="left"
        gutterBottom
        sx={{
          color: theme.palette.common.white,
          fontWeight: 900,
        }}
      >
        Get in touch!
      </Typography>
      <Box marginBottom={4}>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: theme.palette.common.white,
            fontWeight: 400,
          }}
        >
          Get in touch with us by sending a meeage and we will get back to you
          soon to schedule a discovery call.
        </Typography>
      </Box>
    </Box>
  );

  const GridItemFormBlock = () => (
    <Box
      padding={{ xs: 3, sm: 6 }}
      width={'100%'}
      component={Card}
      borderRadius={2}
      boxShadow={4}
    >
      <form noValidate autoComplete="off">
        <Box display="flex" flexDirection={'column'}>
          <Box marginBottom={2}>
            <TextField
              sx={{ height: 54 }}
              label="Full name"
              variant="outlined"
              color="primary"
              fullWidth
            />
          </Box>
          <Box marginBottom={2}>
            <TextField
              sx={{ height: 54 }}
              label="Email"
              type="email"
              variant="outlined"
              color="primary"
              fullWidth
            />
          </Box>
          <Box marginBottom={2}>
            <TextField
              label="Message"
              type="text"
              variant="outlined"
              color="primary"
              fullWidth
              multiline
              rows={6}
            />
          </Box>
          <Box>
            <Button
              sx={{ height: 54 }}
              variant="contained"
              color="primary"
              fullWidth
            >
              Contact
            </Button>
          </Box>
          <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
            <Divider />
          </Box>
          <Box>
            <Typography component="p" variant="body2" align="left">
              By sending a message you agree to our{' '}
              <Box
                component="a"
                href="#0"
                color={theme.palette.text.primary}
                fontWeight={'700'}
              >
                Privacy Policy
              </Box>
              ,{' '}
              <Box
                component="a"
                href="#0"
                color={theme.palette.text.primary}
                fontWeight={'700'}
              >
                Data Policy
              </Box>{' '}
              and{' '}
              <Box
                component="a"
                href="#0"
                color={theme.palette.text.primary}
                fontWeight={'700'}
              >
                Cookie Policy
              </Box>
              .
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemFormBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
