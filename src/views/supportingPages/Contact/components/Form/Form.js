/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const Form = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={'100%'}
        component={Card}
        borderRadius={2}
        boxShadow={4}
        marginBottom={4}
      >
        <form noValidate autoComplete="off">
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="First name"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Last name"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ height: 54 }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  By clicking on "submit" you agree to our{' '}
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
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box>
        <Typography color="text.secondary" align={'center'}>
          We'll get back to you in 1-2 business days.
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
