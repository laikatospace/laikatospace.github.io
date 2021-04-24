/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const News = () => {
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
          align={'center'}
        >
          News
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Read our latest news
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          We've helped some great companies brand, design and get to market.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Google Drive',
            subtitle:
              'Sync any file store to Google Drive for automated sharing with people outside the company.',
            media: 'https://assets.maccarianagency.com/backgrounds/img1.jpg',
          },
          {
            title: 'Google Ad Manager',
            subtitle:
              'Easily manage and edit any Adwords campaign inline to improve ROI with constant review.',
            media: 'https://assets.maccarianagency.com/backgrounds/img2.jpg',
          },
          {
            title: 'Atlassian',
            subtitle:
              'Keep your entire team in sync with development and easily manage tasks, goals, and deadlines.',
            media: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
          },
          {
            title: 'Google Drive',
            subtitle:
              'Sync any file store to Google Drive for automated sharing with people outside the company.',
            media: 'https://assets.maccarianagency.com/backgrounds/img4.jpg',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
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
                data-aos={'fade-up'}
                borderRadius={3}
              >
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 140,
                  }}
                />
                <Box component={CardContent}>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'left'}
                  >
                    {item.title}
                  </Box>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box component={CardActions} justifyContent={'flex-end'}>
                  <Button size="small">Learn More</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item container xs={12} justifyContent={'center'}>
          <Button
            color={'secondary'}
            variant={'contained'}
            size={'large'}
            endIcon={<ChevronRightIcon />}
          >
            Read all
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default News;
