import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import laikaLogo from 'images/laikadope.png';
import whitepaper from 'common/whitepaper.pdf';
import * as links from 'common/Links.js';
import one from 'images/one.png';
import bsc from 'images/bnb.png';
import matic from 'images/matic.png';
import ethereum from 'images/ethereum.png';
import huobi from 'images/huobi.png';
import okex from 'images/okex.png';
import avax from 'images/avax.png';
import ftm from 'images/ftm.png';
import xdai from 'images/xdai.png';
import coinsbit from 'images/coinsbit.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import 'scss/main.scss';

const Topbar = ({
  setThemePalette,
  onSidebarOpen,
  paletteType,
}) => {
  const theme = useTheme();

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
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          display={'flex'}
          alignItems="baseline"
          component="a"
          underline="none"
          href="/"
          height={{ xs: 28, md: 32 }}
        >
          <img src={laikaLogo} className="laikaLogo"/>
        </Box>
        <b>Laika Protocol</b>
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Hidden mdDown>
          <Box marginX={2}>
            <Link underline="none" component="a" href="/" color="textPrimary">
              Home
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href={whitepaper}
              target="_blank"
              color="textPrimary"
            >
              WhitePaper
            </Link>
          </Box>
          <Box marginX={2}>
            <Tooltip title="Coming July 11!">
              <Button
                variant="outlined"
                color="secondary"
                component="a"
                target="_blank"
                size="large"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <Link underline="none" component="a" href="/" color="secondary">
                  Astro Farms
                </Link>
              </Button>
            </Tooltip>
          </Box>
          <Box marginX={2}>
            <Button
              variant="outlined"
              color="primary"
              component="a"
              target="_blank"
              size="large"
              aria-controls="simple-menu-2"
              aria-haspopup="true"
              onClick={handleClick2}
            >
              Platforms
            </Button>
            <Menu
              id="simple-menu2"
              className="simple-menu2"
              anchorEl={anchorEl2}
              keepMounted
              open={Boolean(anchorEl2)}
              onClose={handleClose2}
            >
              <MenuItem onClick={handleClose}>
                <Box marginX={2}>
                  <Tooltip title="Coming Soon!">
                    <Link underline="none" component="a" href="/" color="textPrimary">
                      Academy<sup style={{color:"#c2185b", fontWeight: 600, fontSize: '12px'}}>TBA</sup>
                    </Link>
                  </Tooltip>
                </Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box marginX={2}>
                  <Tooltip title="Coming Soon!">
                    <Link underline="none" component="a" href="/" color="textPrimary">
                      Stargate<sup style={{color:"#c2185b", fontWeight: 600, fontSize: '12px'}}>TBA</sup>
                    </Link>
                  </Tooltip>
                </Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box marginX={2}>
                  <Tooltip title="Coming Soon!">
                    <Link underline="none" component="a" href="/" color="textPrimary">
                      Forge<sup style={{color:"#c2185b", fontWeight: 600, fontSize: '12px'}}>TBA</sup>
                    </Link>
                  </Tooltip>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
          <Box marginX={2}>
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="_blank"
              size="large"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
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
                  <img src={huobi} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>MakiSwap
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link underline="none" component="a" color="white" href={links.okexBuyLink} target="_blank">
                  <img src={okex} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>OKExDex
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
                <Link underline="none" component="a" color="white" href={links.coinsbitLink} target="_blank">
                  <img src={coinsbit} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>CoinsBit
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
