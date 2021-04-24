import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import { Features, Footer, Hero, Highlights, Roadmap, Numbers } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Highlights />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container>
        <Numbers />
      </Container>
      <Container>
        <Roadmap />
      </Container>
      <Container>
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
