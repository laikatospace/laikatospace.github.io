/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import one from 'images/one.png';
import bsc from 'images/bnb.png';
import matic from 'images/matic.png';
import ethereum from 'images/ethereum.png';
import huobi from 'images/huobi.png';
import okex from 'images/okex.png';
import avax from 'images/avax.png';
import xdai from 'images/xdai.png';
import ftm from 'images/ftm.png';
import kcc from 'images/kcc.svg';
import movr from 'images/movr.png';
import coinsbit from 'images/coinsbit.png';
import * as links from 'common/Links.js';

const Footer = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box id="getstarted">
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'primary'}
        align={'center'}
      >
        Get Started
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        gutterBottom
        align={'center'}
      >
        Get started with Laika today
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        align={'center'}
      >
        Laika is a first of its kind, Second Generation deflationary token on the Binance Smart Chain that utilizes a new type of Scalable Automatic Liquidity Pools in order to prevent price manipulation while also supporting cross-chain integration, ensuring that you can bring Laika with you, wherever you go!
      </Typography>
      <Box marginTop={3} display={'flex'} justifyContent={'center'}>
        <Button
          component={'a'}
          target={'_blank'}
          variant="contained"
          color="primary"
          size="large"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
        >
          Purchase now
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
      </Box>
    </Box>
  );
};

export default Footer;
