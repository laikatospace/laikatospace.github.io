import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Container from 'common/Container';
import { Sidebar, Form } from './components';

const Login = ({ themeMode = 'light' }) => {
  return (
    <Box position={'relative'} minHeight={'100vh'} display={'flex'}>
      <Hidden mdDown>
        <Box flex={'1 1 30%'} maxWidth={'30%'} bgcolor={'alternate.main'}>
          <Box display={'flex'} alignItems={'center'} height={'100%'}>
            <Container>
              <Sidebar themeMode={themeMode} />
            </Container>
          </Box>
        </Box>
      </Hidden>
      <Box
        flex={{ xs: '1 1 100%', md: '1 1 70%' }}
        maxWidth={{ xs: '100%', md: '70%' }}
      >
        <Box display={'flex'} alignItems={'center'} height={'100%'}>
          <Container maxWidth={800}>
            <Form />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

Login.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Login;
