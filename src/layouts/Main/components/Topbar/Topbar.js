import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import laikaLogo from 'images/laikadope.png';
import whitepaper from 'common/whitepaper.pdf';
import * as links from 'common/Links.js';
import 'scss/main.scss';

const Topbar = ({
  setThemePalette,
  onSidebarOpen,
  paletteType,
}) => {
  const theme = useTheme();
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
        {/*<Box*/}
        {/*  display={'flex'}*/}
        {/*  padding={1}*/}
        {/*  marginRight={1}*/}
        {/*  borderRadius={8}*/}
        {/*  bgcolor={theme.palette.alternate.main}*/}
        {/*>*/}
        {/*  {paletteTypes.map((item, i) => (*/}
        {/*    <Box*/}
        {/*      key={item}*/}
        {/*      bgcolor={colors[item][700]}*/}
        {/*      width={20}*/}
        {/*      height={20}*/}
        {/*      borderRadius={'100%'}*/}
        {/*      marginRight={i === paletteTypes.length - 1 ? 0 : 1}*/}
        {/*      display={'flex'}*/}
        {/*      justifyContent={'center'}*/}
        {/*      alignItems={'center'}*/}
        {/*      sx={{ cursor: 'pointer' }}*/}
        {/*      onClick={() => setThemePalette(item)}*/}
        {/*    >*/}
        {/*      {paletteType === item && (*/}
        {/*        <svg*/}
        {/*          width={12}*/}
        {/*          height={12}*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*          viewBox="0 0 20 20"*/}
        {/*          fill="currentColor"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*            fillRule="evenodd"*/}
        {/*            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"*/}
        {/*            clipRule="evenodd"*/}
        {/*          />*/}
        {/*        </svg>*/}
        {/*      )}*/}
        {/*    </Box>*/}
        {/*  ))}*/}
        {/*</Box>*/}
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
          <Box>
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="_blank"
              href={links.buyLink}
              size="large"
            >
              Purchase now
            </Button>
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
