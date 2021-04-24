/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DatePicker from '@material-ui/lab/DatePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';

const Form = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Box>
      <Box marginBottom={4} data-aos={isMd ? 'fade-right' : 'fade-up'}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          The best holiday experience
        </Typography>
        <Typography
          variant="h3"
          color="textPrimary"
          gutterBottom
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Stay like a local
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="textSecondary"
          align={'center'}
        >
          Treat yourself with the journey with your inner self.
          <br />
          Visit the world's beautiful cities, and start your spiritual travel
          advanture.
        </Typography>
      </Box>
      <Box
        component={Card}
        maxWidth={{ xs: '100%', md: '50%' }}
        boxShadow={4}
        data-aos={'fade-up'}
        margin={'0 auto'}
      >
        <CardContent>
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
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box
                  component={TextField}
                  label="Where"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  height={54}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputFormat="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    renderInput={(props) => (
                      <TextField
                        label="When"
                        {...props}
                        sx={{ width: '100%' }}
                      />
                    )}
                    color="primary"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component={Button}
                  variant="contained"
                  color="primary"
                  size="large"
                  height={54}
                  fullWidth
                >
                  Start
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Box>
    </Box>
  );
};

export default Form;
