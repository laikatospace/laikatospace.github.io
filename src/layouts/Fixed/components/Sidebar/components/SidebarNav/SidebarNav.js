import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const SidebarNav = ({ pages, onClose }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box>
      <Hidden mdUp>
        <Box
          display={'flex'}
          justifyContent={'flex-end'}
          onClick={() => onClose()}
        >
          <CloseIcon fontSize="small" />
        </Box>
      </Hidden>
      <Box>
        {pages.map((item, i) => (
          <Box key={i} marginBottom={3}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 1,
                display: 'block',
              }}
            >
              {item.title}
            </Typography>
            <Box>
              {item.pages.map((p, i) => (
                <Box marginBottom={1 / 2} key={i}>
                  <Button
                    component={'a'}
                    href={p.href}
                    target={p.target}
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      color:
                        activeLink === p.href
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      backgroundColor:
                        activeLink === p.href
                          ? alpha(theme.palette.primary.main, 0.1)
                          : 'transparent',
                      fontWeight: activeLink === p.href ? 600 : 400,
                    }}
                    onClick={() => onClose()}
                  >
                    {p.title}
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        <Button variant="outlined" fullWidth component="a" href="/">
          Browse pages
        </Button>
      </Box>
      <Box marginTop={1}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component="a"
          target="blank"
          href="https://material-ui.com/store/items/webbee-landing-page/"
        >
          Purchase now
        </Button>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
