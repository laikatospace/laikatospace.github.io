import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Numbers = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Box marginBottom={4} id="tokenomics">
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'primary'}
          align={isSm ? 'center' : 'left'}
        >
          Tokenomics
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={isSm ? 'center' : 'left'}
          gutterBottom
        >
          Clear and Concise.
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={isSm ? 'center' : 'left'}
        >
          Want the numbers? You got it.
        </Typography>
      </Box>
      <Box
        component={Card}
        boxShadow={4}
        borderTop={`4px solid ${theme.palette.primary.main}`}
      >
        <Grid container spacing={2} data-aos={'fade-up'}>
          {[
            {
              title: 1000000000000000,
              subtitle:
                '1 Quadrillion total supply. The perfect number of tokens to get from the doggo command center to the stars.',
              suffix: '',
            },
          ].map((item, i) => (
            <Box
              component={Grid}
              key={i}
              item
              xs={12}
              md={12}
              borderLeft={
                i === 1 && isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              borderRight={
                i === 1 && isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              borderTop={
                i === 1 && !isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              borderBottom={
                i === 1 && !isMd ? `1px solid ${theme.palette.divider}` : 0
              }
            >
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  <Box fontWeight={600} display="flex" justifyContent="center">
                    <VisibilitySensor
                      onChange={(isVisible) => setViewPortVisibility(isVisible)}
                      delayedCall
                    >
                      <CountUp
                        redraw={false}
                        separator=","
                        end={viewPortEntered ? item.title : 0}
                        start={0}
                        suffix={item.suffix}
                      />
                    </VisibilitySensor>
                  </Box>
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Typography color="text.secondary" component="p">
                    {item.subtitle}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          ))}
        </Grid>
      </Box>
      <Box
        component={Card}
        boxShadow={4}
        borderTop={`4px solid ${theme.palette.primary.main}`}
      >
        <Grid container spacing={2} data-aos={'fade-up'}>
          {[
            {
              title: 60,
              subtitle:
                '60% of tokens allocated for the fair launch supply. Presale tokens included.',
              suffix: '%',
            },
            {
              title: 38,
              subtitle:
                '38% of tokens burned right out the gate. AKA, fuel for the deflation rocket.',
              suffix: '%',
            },
            {
              title: 2,
              subtitle:
                '2% of tokens for the developer fund, to keep this rocket flying. Will be timelocked, with tokens unlocking after 1 week, 1 month, and 6 months down the line.',
              suffix: '%',
            },
          ].map((item, i) => (
            <Box
              component={Grid}
              key={i}
              item
              xs={12}
              md={4}
              borderLeft={
                i === 1 && isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              borderRight={
                i === 1 && isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              borderTop={
                i === 1 && !isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              borderBottom={
                i === 1 && !isMd ? `1px solid ${theme.palette.divider}` : 0
              }
            >
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  <Box fontWeight={600}>
                    <VisibilitySensor
                      onChange={(isVisible) => setViewPortVisibility(isVisible)}
                      delayedCall
                    >
                      <CountUp
                        redraw={false}
                        separator=","
                        end={viewPortEntered ? item.title : 0}
                        start={0}
                        suffix={item.suffix}
                      />
                    </VisibilitySensor>
                  </Box>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </CardContent>
            </Box>
          ))}
        </Grid>
      </Box>
      <br/>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        align={isSm ? 'center' : 'left'}
      >
        Special anti-whale tax fees on every transaction - helping holders, punishing whales.
      </Typography>
      <br/>
      <Box
        component={Card}
        boxShadow={4}
        borderTop={`4px solid ${theme.palette.primary.main}`}
      >
        <Grid container spacing={2} data-aos={'fade-up'}>
          {[
            {
              title: 2,
              subtitle:
                'Krill: 0.001% or less of the total supply.',
              suffix: '%',
            },
            {
              title: 4,
              subtitle:
                'Shrimp: 0.0025% or less of the total supply.',
              suffix: '%',
            },
            {
              title: 6,
              subtitle:
              'Fish: 0.005% or less of the total supply.',
              suffix: '%',
            },
            {
              title: 8,
              subtitle:
              'Dolphin: 0.01% or less of the total supply.',
              suffix: '%',
            },
            {
              title: 10,
              subtitle:
              'Orca: 0.025% or less of the total supply.',
              suffix: '%',
            },
            {
              title: 12,
              subtitle:
              'Humpback Whale: 0.05% or less of the total supply.',
              suffix: '%',
            },
            {
              title: 16,
              subtitle:
              'Blue Whale: 0.1% or less of the total supply.',
              suffix: '%',
            },
            {
              title: 20,
              subtitle:
              'Megalodon: 0.5% or less of the total supply.',
              suffix: '%',
            },
          ].map((item, i) => (
            <Box
              component={Grid}
              key={i}
              item
              xs={12}
              md={1.5}
              borderLeft={
                i !== 0 && isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              borderRight={
                i === 8 && isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              borderTop={
                i === 1 && !isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              borderBottom={
                i === 1 && !isMd ? `1px solid ${theme.palette.divider}` : 0
              }
            >
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  <Box fontWeight={600}>
                    <VisibilitySensor
                      onChange={(isVisible) => setViewPortVisibility(isVisible)}
                      delayedCall
                    >
                      <CountUp
                        redraw={false}
                        end={viewPortEntered ? item.title : 0}
                        start={0}
                        suffix={item.suffix}
                      />
                    </VisibilitySensor>
                  </Box>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </CardContent>
            </Box>
          ))}
        </Grid>
      </Box>
      <Box
        component={Card}
        boxShadow={4}
        borderTop={`4px solid ${theme.palette.primary.main}`}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            <Box fontWeight={600} display="flex" justifyContent="center">
                Our custom rocket fuel recipe: one transaction fee, two parts.
            </Box>
          </Typography>
        </CardContent>
      </Box>
      <Box
        component={Card}
        boxShadow={4}
        borderTop={`4px solid ${theme.palette.primary.main}`}
      >
        <Grid container spacing={2} data-aos={'fade-up'}>
          {[
            {
              title: 50,
              subtitle:
                'Half of the fee is redistributed to holders. Since that includes the dead address, this includes an automatic burn.',
              suffix: '%',
            },
            {
              title: 50,
              subtitle:
                '50% is auto-injected into the liquidity pool on PancakeSwap - creating a price floor for our doggo rocket.',
              suffix: '%',
            },
          ].map((item, i) => (
            <Box
              component={Grid}
              key={i}
              item
              xs={12}
              md={6}
              borderLeft={
                i === 1 && isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              // borderRight={
              //   i === 1 && isMd ? `1px solid ${theme.palette.divider}` : 0
              // }
              borderTop={
                i === 1 && !isMd ? `1px solid ${theme.palette.divider}` : 0
              }
              borderBottom={
                i === 1 && !isMd ? `1px solid ${theme.palette.divider}` : 0
              }
            >
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  <Box fontWeight={600}>
                    <VisibilitySensor
                      onChange={(isVisible) => setViewPortVisibility(isVisible)}
                      delayedCall
                    >
                      <CountUp
                        redraw={false}
                        decimals={2}
                        separator=","
                        end={viewPortEntered ? item.title : 0}
                        start={0}
                        suffix={item.suffix}
                      />
                    </VisibilitySensor>
                  </Box>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </CardContent>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Numbers;
