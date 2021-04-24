import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Registration = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Ready to join?
        </Box>
        <Typography align={'center'} color="textSecondary" variant={'h6'}>
          Stay up to date on all tech news, reviews, and much more!
        </Typography>
      </Box>
      <Box maxWidth={400} margin={'0 auto'}>
        <form noValidate autoComplete="off">
          <Box display="flex" flexDirection={'column'}>
            <Box marginBottom={2}>
              <TextField
                sx={{ height: 54 }}
                label="Full name"
                variant="outlined"
                color="primary"
                size="medium"
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
                size="medium"
                fullWidth
              />
            </Box>
            <Box marginBottom={2}>
              <TextField
                sx={{ height: 54 }}
                label="Password"
                type="password"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Box>
            <Box marginBottom={2}>
              <Typography component="p" variant="body2" align="left">
                By creating you account you agree to our{' '}
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
            <Box>
              <Button
                sx={{ height: 54 }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
              >
                Register now
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Registration;
