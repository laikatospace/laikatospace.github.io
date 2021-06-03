/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import one from 'images/one.png';
import bsc from 'images/bsc.svg';
import matic from 'images/matic.png';
import ethereum from 'images/ethereum.png';
import huobi from 'images/huobi.png';
import okex from 'images/okex.png';
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
            <Link underline="none" component="a" color="white" href={links.ethBuyLink}>
              <img src={ethereum} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>UniSwap
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link underline="none" component="a" color="white" href={links.huobiBuyLink}>
              <img src={huobi} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>MakiSwap
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link underline="none" component="a" color="white" href={links.okexBuyLink}>
              <img src={okex} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>OKExDex
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link underline="none" component="a" color="white" href={links.coinsbitLink}>
              <img src={coinsbit} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>CoinsBit
            </Link>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Footer;
