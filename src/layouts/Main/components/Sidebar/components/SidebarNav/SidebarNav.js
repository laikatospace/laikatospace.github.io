import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import whitepaper from 'common/whitepaper.pdf';
import one from 'images/one.png';
import avax from 'images/avax.png';
import bsc from 'images/bnb.png';
import matic from 'images/matic.png';
import ethereum from 'images/ethereum.png';
import huobi from 'images/huobi.png';
import okex from 'images/okex.png';
import xdai from 'images/xdai.png';
import ftm from 'images/ftm.png';
import coinsbit from 'images/coinsbit.png';
import * as links from 'common/Links.js';

const SidebarNav = ({ pages, onClose }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const logos = {
    'bsc': bsc,
    'eth': ethereum,
    'one': one,
    'matic': matic,
    'huobi': huobi,
    'okex': okex,
    'avax': avax,
    'xdai': xdai,
    'fantom': ftm,
    "cex": coinsbit
  }

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        onClick={() => onClose()}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box>
          {pages.map((item, i) => (
            <Box key={i} marginBottom={4}>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: 1,
                  display: 'block',
                }}
              >
                {logos[item.id] && <img src={logos[item.id]} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>}{item.title}
              </Typography>
              <Grid container spacing={1}>
                {item.pages.map((p, i) => (
                  <Grid item xs={6} key={i}>
                    <Link
                      variant="body2"
                      component={'a'}
                      href={p.href}
                      color={activeLink === p.href ? 'primary' : 'textPrimary'}
                      sx={{
                        fontWeight: activeLink === p.href ? 600 : 400,
                        '&:hover': {
                          textDecoration: 'none',
                          color: theme.palette.primary.dark,
                        },
                      }}
                      onClick={() => onClose()}
                    >
                      {p.title}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
        <Box>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href={whitepaper}
          >
            WhitePaper
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href="/"
          >
            Academy<sup><sup style={{color:"white"}}>TBA</sup></sup>
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href="/"
          >
            Stargate<sup><sup style={{color:"white"}}>TBA</sup></sup>
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href="/"
          >
            Forge<sup><sup style={{color:"white"}}>TBA</sup></sup>
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            component="a"
            target="blank"
            href="/"
          >
            Astro Farms<sup><sup style={{color:"white"}}>Soon</sup></sup>
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="_blank"
            href={links.buyLink}
          >
            Purchase now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
