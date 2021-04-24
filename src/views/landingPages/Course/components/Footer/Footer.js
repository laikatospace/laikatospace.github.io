import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h6"
        align="left"
        gutterBottom
        sx={{
          color: theme.palette.common.white,
          fontWeight: 900,
        }}
      >
        Learn how to build better websites
      </Typography>
      <Box marginBottom={4}>
        <Typography sx={{ color: theme.palette.common.white }}>
          Over 300 stand-alone atomic components that will help you to boost
          your frontend development productivity.
        </Typography>
      </Box>
      <Box component={Card} maxWidth={600} boxShadow={4}>
        <CardContent>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Box marginBottom={2}>
              <Typography variant="body1" component="p">
                Join over 5000 subscribers for our newsletter
              </Typography>
            </Box>
            <form noValidate autoComplete="off">
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
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                >
                  Subscribe
                </Box>
              </Box>
            </form>
          </Box>
        </CardContent>
      </Box>
    </Box>
  );
};

export default Footer;
