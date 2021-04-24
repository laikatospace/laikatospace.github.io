/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typed from 'react-typed';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RocketIllustration from 'svg/illustrations/Rocket';
import bscscan from 'images/bscscan.svg';
import github from 'images/github.svg';
import medium from 'images/medium.svg';
import reddit from 'images/reddit.svg';
import telegram from 'images/telegram.svg';
import twitter from 'images/twitter.svg';
import '../../../../../scss/main.scss';
import * as links from 'common/Links.js';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              Meet Laika!
              <br />
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
              sx={{ fontWeight: 400 }}
            >
              Laika’s goal is simple - to go where no man, or dog, has gone before.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              component={'a'}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href={
                links.buyLink
              }
              target={'_blank'}
            >
              Buy Now
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <Button
                component={'a'}
                href={'/docs-introduction'}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                Learn More
              </Button>
            </Box>
          </Box>
          <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start'}} width={{ xs: '100%', md: 'auto' }}>
            <span><a href={links.telegramLink} target="_blank" rel="noreferrer"><img className="socialButtonStyle" src={telegram}/></a></span>
            <span><a href={links.twitterLink} target="_blank" rel="noreferrer"><img className="socialButtonStyle" src={twitter}/></a></span>
            <span><a href={links.githubLink} target="_blank" rel="noreferrer"><img className="socialButtonStyle" src={github}/></a></span>
            <span><a href={links.bscLink} target="_blank" rel="noreferrer"><img className="socialButtonStyle" src={bscscan}/></a></span>
            <span><a href={links.mediumLink} target="_blank" rel="noreferrer"><img className="socialButtonStyle" src={medium}/></a></span>
            <span><a href={links.redditLink} target="_blank" rel="noreferrer"><img className="socialButtonStyle" src={reddit}/></a></span>
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
            <RocketIllustration width={'100%'} height={'100%'} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
