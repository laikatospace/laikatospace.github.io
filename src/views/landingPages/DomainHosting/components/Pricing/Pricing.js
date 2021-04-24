import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Pricing = () => {
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
          Pricing
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
          data-aos={'fade-up'}
        >
          Flexible and transparent pricing
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          Whatever your status, our offers evolve according to your needs.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Standard',
            subtitle:
              'Ideal for corporate, portfolio, blog, shop and many more.',
            price: '$69',
            isHighlighted: false,
          },
          {
            title: 'Multisite',
            subtitle:
              'All the same examples as the Standard License, but you could build all of them with a single Multisite license.',
            price: '$119',
            isHighlighted: true,
          },
          {
            title: 'Extended',
            subtitle:
              'Best suited for "paid subscribers" and SaaS analytics applications.',
            price: '$699',
            isHighlighted: false,
          },
        ].map((item, i) => (
          <Grid item xs={12} key={i} data-aos={'fade-up'}>
            <Card>
              <CardContent>
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={{
                    xs: 'stretched',
                    sm: 'flex-start',
                    md: 'center',
                  }}
                  flexDirection={{ xs: 'column', md: 'row' }}
                >
                  <Box maxWidth={{ xs: '100%', md: '70%' }}>
                    <Typography variant={'h6'} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </Box>
                  <Box
                    component={Button}
                    variant={item.isHighlighted ? 'contained' : 'outlined'}
                    size={'large'}
                    marginTop={{ xs: 2, md: 0 }}
                    marginLeft={{ md: 2 }}
                  >
                    {`Purchase for ${item.price}`}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
