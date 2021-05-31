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
import RocketIllustration from 'svg/illustrations/Rocket';
import bscscan from 'images/bscscan.svg';
import github from 'images/github.svg';
import medium from 'images/medium.svg';
import reddit from 'images/reddit.svg';
import discord from 'images/discord.svg';
import telegram from 'images/telegram.svg';
import twitter from 'images/twitter.svg';
import one from 'images/one.png';
import bsc from 'images/bsc.svg';
import matic from 'images/matic.png';
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

    return (
        <Grid container spacing={4}>
            <Grid item container alignItems={'center'} xs={12} md={6}>
                <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                    <Box marginBottom={2}>
                        <img src={bsc} className="hover-animation-chain bsc"/>
                        <img src={one} className="hover-animation-chain one"/>
                        <img src={matic} className="hover-animation-chain matic"/>
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
                            <Link underline="none" component="a" color="white" href={links.buyLink}>
                              <img src={bsc} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>PancakeSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.v1BuyLink}>
                              <img src={bsc} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>SnowgeSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.maticBuyLink}>
                              <img src={matic} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>QuickSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.harmonyBuyLink}>
                              <img src={one} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>ViperSwap
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link underline="none" component="a" color="white" href={links.coinsbitLink}>
                              <img src={coinsbit} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>CoinsBit
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
                        {/*<RocketIllustration width={'100%'} height={'100%'} />*/}
                        <img width={'100%'} height={'100%'} src={laika}/>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Hero;
