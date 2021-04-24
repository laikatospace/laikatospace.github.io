/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as links from 'common/Links.js';

const Footer = () => {
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
          href={links.buyLink}
          target={'_blank'}
          variant="contained"
          color="primary"
          size="large"
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
      </Box>
    </Box>
  );
};

export default Footer;
