import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import laikaLogo from 'images/laikalogo.png';
import whitepaper from 'common/whitepaper.pdf';
import * as links from 'common/Links.js';
import 'scss/main.scss';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box
          display={'flex'}
          component="a"
          underline="none"
          href="/"
          title="webbee"
          height={24}
          width={35}
        >
          <img src={laikaLogo} className="laikaLogoFooter"/>
          <Box display="flex" justifyContent="flex-start" color="white" marginLeft={2}><b>Laika</b></Box>
        </Box>
        <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="/"
              color="textPrimary"
              variant={'subtitle2'}
            >
              Home
            </Link>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href={whitepaper}
              color="textPrimary"
              variant={'subtitle2'}
            >
              WhitePaper
            </Link>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Tooltip title="Coming Soon!">
              <Link
                underline="none"
                component="a"
                href="/"
                color="textPrimary"
                variant={'subtitle2'}
              >
                Academy<sup style={{color:"#c2185b"}}>TBA</sup>
              </Link>
            </Tooltip>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Tooltip title="Coming Soon!">
              <Link
                underline="none"
                component="a"
                href="/"
                color="textPrimary"
                variant={'subtitle2'}
              >
                Stargate<sup style={{color:"#c2185b"}}>TBA</sup>
              </Link>
            </Tooltip>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Tooltip title="Coming Soon!">
              <Link
                underline="none"
                component="a"
                href="/"
                color="textPrimary"
                variant={'subtitle2'}
              >
              Forge<sup style={{color:"#c2185b"}}>TBA</sup>
              </Link>
            </Tooltip>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Tooltip title="Live Now!">
              <Link
                underline="none"
                component="a"
                href="http://astroprotocol.com"
                color="textPrimary"
                variant={'subtitle2'}
              >
              Astro Farms<sup style={{color:"#20fbff"}}>LIVE</sup>
              </Link>
            </Tooltip>
          </Box>
          <Box marginTop={1}>
            <Button
              variant="outlined"
              color="primary"
              component="a"
              target="blank"
              href={links.buyLink}
              size="small"
            >
              Purchase now
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        gutterBottom
      >
        &copy; Laika Protocol 2021. All rights reserved.
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}
      >
      Legal Disclaimer:
The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website&apos;s content as such. The Laika team does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. By purchasing Laika, you agree that you are not purchasing a security or investment and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token &quot;as is&quot; and is not required to provide any support or services. You should have no expectation of any form from Laika and its team. Although Laika is an experimental token for social experiment and not a digital currency, the team strongly recommends that United States persons do not purchase it because the team cannot ensure compliance with United States regulations. Always make sure that you are in compliance with your local laws and regulations before you make any purchase.
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
