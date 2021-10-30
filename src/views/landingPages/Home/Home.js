import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import {Features, Footer, Hero, Highlights, Roadmap, Numbers} from './components';
import multidog from "../../../images/Laika_plaV2.png";
import spaceDog from "../../../images/spacedog2.png";
import laikaBg from "../../../images/LaikaBG.svg";
import one from 'images/one.png';
import avax from 'images/avax.png';
import bsc from 'images/bnb.png';
import matic from 'images/matic.png';
import ethereum from 'images/ethereum.png';
import huobi from 'images/huobi.png';
import okex from 'images/okex.png';
import xdai from 'images/xdai.png';
import ftm from 'images/ftm.png';
import kcc from 'images/kcc.svg';
import movr from 'images/movr.png';
import { useLottie, useLottieInteractivity } from "lottie-react";
import rocketAnimation from "animations/rocketAnimation.json";

const options = {
  animationData: rocketAnimation,
};

const Home = () => {
    const theme = useTheme();
    const lottieObj = useLottie(options);
    const RocketAnimation = useLottieInteractivity({
      lottieObj,
      mode: "scroll",
      actions: [
        {
          visibility: [0, 0.4],
          type: "stop",
          frames: [0],
        },
        {
          visibility: [0.4, 0.5],
          type: "seek",
          frames: [0, 43],
        },
        {
          visibility: [0.5, 1.0],
          type: "loop",
          frames: [0, 140],
        },
      ],
    });
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
                    <div id="logo-spin-container">
                      <div class="logo-spin-item" style={{"--d":"0s", "--label":"BINANCE SMART CHAIN"}}><img src={bsc} className="hover-animation-chain"/></div>
                      <div class="logo-spin-item" style={{"--d":"-3s", "--label":"HARMONY ONE"}}><img src={one} className="hover-animation-chain"/></div>
                      <div class="logo-spin-item" style={{"--d":"-6s", "--label":"POLYGON"}}><img src={matic} className="hover-animation-chain"/></div>
                      <div class="logo-spin-item" style={{"--d":"-9s", "--label":"ETHEREUM"}}><img src={ethereum} className="hover-animation-chain"/></div>
                      <div class="logo-spin-item" style={{"--d":"-12s", "--label":"HUOBI ECO"}}><img src={huobi} className="hover-animation-chain"/></div>
                      <div class="logo-spin-item" style={{"--d":"-15s", "--label":"OKEx"}}><img src={okex} className="hover-animation-chain"/></div>
                      <div class="logo-spin-item" style={{"--d":"-18s", "--label":"AVALANCHE"}}><img src={avax} className="hover-animation-chain"/></div>
                      <div class="logo-spin-item" style={{"--d":"-21s", "--label":"xDai"}}><img src={xdai} className="hover-animation-chain"/></div>
                      <div class="logo-spin-item" style={{"--d":"-24s", "--label":"FANTOM"}}><img src={ftm} className="hover-animation-chain"/></div>
                      <div class="logo-spin-item" style={{"--d":"-27s", "--label":"KCC"}}><img src={kcc} className="hover-animation-chain"/></div>
                      <div class="logo-spin-item" style={{"--d":"-30s", "--label":"MOVR"}}><img src={movr} className="hover-animation-chain"/></div>
                    </div>
                </Box>
            </Box>
            <Box position={'relative'} className={'rocket-animation'}>
                <Box height={'100%'} width={'100%'} maxWidth={400} m={6} style={{marginLeft: "39.5%", marginTop: "auto", marginBottom: "auto"}} data-aos={'fade-up'}>
                    {RocketAnimation}
                </Box>
            </Box>
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
