import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Numbers = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            title: 12,
            subtitle: '12 years in business.',
          },
          {
            title: '5,2K',
            subtitle: '5.200 sold copies',
          },
          {
            title: '99%',
            subtitle: '99% customer statisfication.',
          },
        ].map((item, i) => (
          <Grid key={i} item xs={12} md={4}>
            <Typography
              variant="h3"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 'medium',
              }}
            >
              {item.title}
            </Typography>
            <Typography color="text.secondary" align={'center'} component="p">
              {item.subtitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Numbers;
