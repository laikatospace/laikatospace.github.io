import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const Features = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          Features
        </Typography>
        <Typography fontWeight={700} variant={'h3'}>
          What makes it different?
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Automation',
            subtitle:
              'We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools.',
          },
          {
            title: 'Funnel Optimization',
            subtitle:
              'We help you optimize your website or mobile app flow to increase conversion rates and retention to drive growth.',
          },
          {
            title: 'Idea Creation',
            subtitle:
              'We meet with your team to know more about your project idea and goals.',
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'a'}
              href={'#0'}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                display={'flex'}
                flexDirection={'column'}
                data-aos={'fade-up'}
                borderRadius={3}
              >
                <Box component={CardContent} padding={4}>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                  >
                    {item.title}
                  </Box>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box
                  component={CardActions}
                  justifyContent={'flex-end'}
                  paddingX={4}
                >
                  <Button size="large">Learn More</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
