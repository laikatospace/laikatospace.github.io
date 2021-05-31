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
import bsc from 'images/bsc.svg';
import matic from 'images/matic.png';
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
          <Box>
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
            <Tooltip title="Coming Soon!">
              <Link underline="none" component="a" href="/" color="textPrimary">
                Academy<sup style={{color:"#c2185b"}}>TBA</sup>
              </Link>
            </Tooltip>
          </Box>
          <Box marginX={2}>
            <Tooltip title="Coming Soon!">
              <Link underline="none" component="a" href="/" color="textPrimary">
                Stargate<sup style={{color:"#c2185b"}}>TBA</sup>
              </Link>
            </Tooltip>
          </Box>
          <Box marginX={2}>
            <Tooltip title="Coming Soon!">
              <Link underline="none" component="a" href="/" color="textPrimary">
                Forge<sup style={{color:"#c2185b"}}>TBA</sup>
              </Link>
            </Tooltip>
          </Box>
          <Box>
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
