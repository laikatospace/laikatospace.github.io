import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import {Features, Footer, Hero, Highlights, Roadmap, Numbers} from './components';
import multidog from "../../../images/Laika_plaV2.png";

const Home = () => {
    const theme = useTheme();
    return (
        <Box>
            <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
                <Container position="relative" zIndex={2}>
                    <Hero/>
                </Container>
            </Box>
            <Container>
                <Highlights/>
            </Container>
            <Container>
                <Features/>
            </Container>
            <Box position={'relative'} className={'space-dog-banner'}>
                <Box height={'100%'} width={'100%'} maxWidth={400} m={6}>
                    <img src={multidog} height={'60%'} width={'100%'}/>
                </Box>
            </Box>
            <Container>
                <Numbers/>
            </Container>
            <Container>
                <Roadmap/>
            </Container>
            <Container>
                <Footer/>
            </Container>
        </Box>
    );
};

export default Home;
