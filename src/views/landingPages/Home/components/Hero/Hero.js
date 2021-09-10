/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typed from 'react-typed';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import bscscan from 'images/bscscan.svg';
import github from 'images/github.svg';
import medium from 'images/medium.svg';
import reddit from 'images/reddit.svg';
import discord from 'images/discord.svg';
import telegram from 'images/telegram.svg';
import twitter from 'images/twitter.svg';
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
import coinsbit from 'images/coinsbit.png';
import laika from '../../../../../images/laikacoin.png';
import '../../../../../scss/main.scss';
import * as links from 'common/Links.js';

const Hero = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
      setAnchorEl2(null);
    };

    return (
        <Grid container spacing={4}>
            <Grid item container alignItems={'center'} xs={12} md={6}>
                <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                    <Box marginBottom={2}>
                      {isMd && <React.Fragment>
                        <Box className="marginbottom">
                          <img src={bsc} className="hover-animation-chain bsc"/>
                          <img src={one} className="hover-animation-chain one"/>
                          <img src={matic} className="hover-animation-chain matic"/>
                          <img src={avax} className="hover-animation-chain avax"/>
                          <img src={ftm} className="hover-animation-chain ftm"/>
                          <img src={movr} className="hover-animation-chain movr"/>
                        </Box>
                        <Box>
                          <img src={ethereum} className="hover-animation-chain eth"/>
                          <img src={huobi} className="hover-animation-chain huobi"/>
                          <img src={okex} className="hover-animation-chain okex"/>
                          <img src={xdai} className="hover-animation-chain xdai"/>
                          <img src={kcc} className="hover-animation-chain kcc"/>
                        </Box>
                      </React.Fragment>}
                      {!isMd && <Box>
                        <img src={bsc} className="hover-animation-chain bsc"/>
                        <img src={one} className="hover-animation-chain one"/>
                        <img src={matic} className="hover-animation-chain matic"/>
                        <img src={ethereum} className="hover-animation-chain eth"/>
                        <img src={huobi} className="hover-animation-chain huobi"/>
                        <img src={okex} className="hover-animation-chain okex"/>
                        <img src={avax} className="hover-animation-chain avax"/>
                        <img src={xdai} className="hover-animation-chain xdai"/>
                        <img src={ftm} className="hover-animation-chain ftm"/>
                        <img src={kcc} className="hover-animation-chain kcc"/>
                        <img src={movr} className="hover-animation-chain movr"/>
                      </Box>}
                        <Typography
                            variant="h2"
                            color="textPrimary"
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            Meet Laika!
                            <br/>
                            {' '}
                            <Typography
                                color={'primary'}
                                component={'span'}
                                variant={'inherit'}
                            >
                                <Typed
                                    strings={['2nd Generation.', 'Deflationary.', 'Scalable Auto LP.', 'Cross Chain.']}
                                    typeSpeed={80}
                                    loop={true}
                                />
                            </Typography>
                        </Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography
                            variant="h6"
                            component="p"
                            color="textSecondary"
                            sx={{fontWeight: 400}}
                        >
                            Laika’s goal is simple - to go where no man, or dog, has gone before.
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={{xs: 'column', sm: 'row'}}
                        alignItems={{xs: 'stretched', sm: 'flex-start'}}
                    >
                        <Button
                            component={'a'}
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth={isMd ? false : true}
                            target={'_blank'}
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            Buy Now
                        </Button>
                        <Menu
                          id="simple-menu"
                          className="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.buyLink} target="_blank">
                              <img src={bsc} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>PancakeSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.v1BuyLink} target="_blank">
                              <img src={bsc} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>SnowgeSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.maticBuyLink} target="_blank">
                              <img src={matic} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>QuickSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.harmonyBuyLink} target="_blank">
                              <img src={one} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>ViperSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.ethBuyLink} target="_blank">
                              <img src={ethereum} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>UniSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.huobiBuyLink} target="_blank">
                              <img src={huobi} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>MDEX
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.okexBuyLink} target="_blank">
                              <img src={okex} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>CherrySwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.avaxBuyLink} target="_blank">
                              <img src={avax} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>PangolinDex
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.xdaiBuyLink} target="_blank">
                              <img src={xdai} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>HoneySwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.fantomBuyLink} target="_blank">
                              <img src={ftm} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>SpookySwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.kccBuyLink} target="_blank">
                              <img src={kcc} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>KuSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.movrBuyLink} target="_blank">
                              <img src={movr} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>MoonSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.coinsbitLink} target="_blank">
                              <img src={coinsbit} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>CoinsBit
                            </Link>
                          </MenuItem>
                        </Menu>
                        <Button
                            component={'a'}
                            variant="outlined"
                            color="primary"
                            size="large"
                            fullWidth={isMd ? false : true}
                            target={'_blank'}
                            aria-controls="simple-menu2"
                            aria-haspopup="true"
                            onClick={handleClick2}
                            style={isMd ? {marginLeft: "1vw"} : {}}
                        >
                            Bridge
                        </Button>
                        <Menu
                          id="simple-menu2"
                          className="simple-menu2"
                          anchorEl={anchorEl2}
                          keepMounted
                          open={Boolean(anchorEl2)}
                          onClose={handleClose2}
                        >
                          <MenuItem onClick={handleClose2}>
                            <Link underline="none" component="a" color="white" href={links.polygonBridge} target="_blank">
                              <img src={matic} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>Polygon
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose2}>
                            <Link underline="none" component="a" color="white" href={links.harmonyBridge} target="_blank">
                              <img src={one} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>Harmony
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose2}>
                            <Link underline="none" component="a" color="white" href={links.ethereumBridge} target="_blank">
                              <img src={ethereum} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>Ethereum
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose2}>
                            <Link underline="none" component="a" color="white" href={links.huobiEcoBridge} target="_blank">
                              <img src={huobi} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>Huobi Eco
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose2}>
                            <Link underline="none" component="a" color="white" href={links.okexBridge} target="_blank">
                              <img src={okex} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>OKEx
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose2}>
                            <Link underline="none" component="a" color="white" href={links.avalancheBridge} target="_blank">
                              <img src={avax} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>Avalanche
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose2}>
                            <Link underline="none" component="a" color="white" href={links.xdaiBridge} target="_blank">
                              <img src={xdai} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>xDai
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose2}>
                            <Link underline="none" component="a" color="white" href={links.fantomBridge} target="_blank">
                              <img src={ftm} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>Fantom
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose2}>
                            <Link underline="none" component="a" color="white" href={links.kccBridge} target="_blank">
                              <img src={kcc} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>KCC
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose2}>
                            <Link underline="none" component="a" color="white" href={links.movrBridge} target="_blank">
                              <img src={movr} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>MoonRiver
                            </Link>
                          </MenuItem>
                        </Menu>
                    </Box>
                    <Box display="flex" justifyContent={{xs: 'center', md: 'flex-start'}}
                         width={{xs: '100%', md: 'auto'}}>
                        <span><a href={links.telegramLink} target="_blank" rel="noreferrer"><img
                            className="socialButtonStyle" src={telegram}/></a></span>
                        <span><a href={links.twitterLink} target="_blank" rel="noreferrer"><img
                            className="socialButtonStyle" src={twitter}/></a></span>
                        <span><a href={links.discordLink} target="_blank" rel="noreferrer"><img
                            className="socialButtonStyle discord-icon" src={discord}/></a></span>
                        <span><a href={links.githubLink} target="_blank" rel="noreferrer"><img
                            className="socialButtonStyle" src={github}/></a></span>
                        <span><a href={links.bscLink} target="_blank" rel="noreferrer"><img
                            className="socialButtonStyle" src={bscscan}/></a></span>
                        <span><a href={links.mediumLink} target="_blank" rel="noreferrer"><img
                            className="socialButtonStyle" src={medium}/></a></span>
                        {/*<span><a href={links.redditLink} target="_blank" rel="noreferrer"><img className="socialButtonStyle" src={reddit}/></a></span>*/}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box
                    height={'100%'}
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Box height={'100%'} width={'100%'} maxHeight={600}>
                        {/* <img height={'100%'} src={laika} className="abspos"/> */}
                        <img width={'100%'} height={'100%'} src={laika} className="hoverscale"/>
                        {/* <div id="logo-spin-container">
                          <div class="logo-spin-item" style={{"--d":"0s", "--label":"BINANCE SMART CHAIN"}}><img src={bsc} className="hover-animation-chain"/></div>
                          <div class="logo-spin-item" style={{"--d":"-4s", "--label":"HARMONY ONE"}}><img src={one} className="hover-animation-chain"/></div>
                          <div class="logo-spin-item" style={{"--d":"-8s", "--label":"POLYGON"}}><img src={matic} className="hover-animation-chain"/></div>
                          <div class="logo-spin-item" style={{"--d":"-12s", "--label":"ETHEREUM"}}><img src={ethereum} className="hover-animation-chain"/></div>
                          <div class="logo-spin-item" style={{"--d":"-16s", "--label":"HUOBI ECO"}}><img src={huobi} className="hover-animation-chain"/></div>
                          <div class="logo-spin-item" style={{"--d":"-20s", "--label":"OKEx"}}><img src={okex} className="hover-animation-chain"/></div>
                          <div class="logo-spin-item" style={{"--d":"-11s", "--label":"AVAX"}}><img src={avax} className="hover-animation-chain"/></div>
                        </div> */}
                    </Box>
                    {!isMd && <img width={'100%'} height={'100%'} src={laika}/>}
                </Box>
            </Grid>
        </Grid>
    );
};

export default Hero;
