import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import {Features, Footer, Hero, Highlights, Roadmap, Numbers} from './components';
import spaceDog from "../../../images/spacedog2.png";
import laikaBg from "../../../images/LaikaBG.svg";

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
            <Box bgcolor={theme.palette.alternate.main} position={'relative'} className={'space-dog-banner'}>
                <Box height={'100%'} width={'100%'} maxWidth={600}>
                    <img src={spaceDog} height={'100%'} width={'100%'}/>
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
