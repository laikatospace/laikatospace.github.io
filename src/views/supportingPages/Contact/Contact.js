import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Map, Form, Faq } from './components';
import Container from 'common/Container';

const Contact = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container>
        <Grid container spacing={isMd ? 8 : 4}>
          <Grid item xs={12} md={6}>
            <Map themeMode={themeMode} />
          </Grid>
          <Grid item container xs={12} md={6} alignItems={'center'}>
            <Form />
          </Grid>
        </Grid>
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container maxWidth={800}>
          <Faq />
        </Container>
      </Box>
    </Box>
  );
};

Contact.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Contact;
