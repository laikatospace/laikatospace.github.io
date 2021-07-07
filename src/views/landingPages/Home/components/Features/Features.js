/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {useTheme} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import spaceDog from 'images/spacedog.png';

const Features = () => {
    const theme = useTheme();
    return (
        <Box id="about">
            <Box marginBottom={4}>
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'medium',
                    }}
                    gutterBottom
                    color={'primary'}
                    align={'center'}
                >
                    About
                </Typography>
                <Box
                    component={Typography}
                    fontWeight={700}
                    variant={'h3'}
                    gutterBottom
                    align={'center'}
                >
                    Why Laika?
                </Box>
                <Typography
                    variant={'h6'}
                    component={'p'}
                    color={'textSecondary'}
                    align={'center'}
                >
                Laika was a Soviet space dog which became one of the first animals in space, and the first animal to orbit the Earth.  In the spirit of Laika, our project's core values are to learn, explore, and innovate as we traverse the everchanging world of DeFi.
                <br/><br/>
                Laika Protocol's goal is simple - to go where no man, or dog, has gone before.  Laika originally started as a second-generation deflationary token on BSC, which included the first of its kind scalable auto LPs as well as a max transaction limit to prevent price manipulation. Since its inception, it has grown into a full multi-chain DeFi ecosystem. Laika Protocol has already been bridged to over 9 chains, with more to come in the future!
                <br/><br/>
                Laika’s long term plans include several other features such as trustless bridge deployment for tokens across all currently supported chains, a multi-chain oracle, several new platforms, and more!
                </Typography>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                marginBottom={4}
                bgcolor={'black'}
                width={'100%'}
            >
            </Box><br/><br/>
            <Typography id="features"
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 'medium',
                        }}
                        gutterBottom
                        color={'primary'}
                        align={'center'}
            >
                best doggo coin
            </Typography>
            <Box
                component={Typography}
                fontWeight={700}
                variant={'h3'}
                gutterBottom
                align={'center'}
            >
                Features
            </Box>
            <Box>
                <Grid container spacing={4}>
                    {[
                        {
                            title: 'Deflationary.',
                            subtitle:
                                'Laika is designed with a hard cap on its total token supply, and our circulating supply decreases with every transaction.',
                            icon: (
                                <svg
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: 'Auto Yield-Farming.',
                            subtitle:
                                'Enjoy rewards and interest for doing nothing but holding your tokens. How easy is that?',
                            icon: (
                                <svg
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: 'Scalable LP Injection.',
                            subtitle: 'Automatic LP Injection, but with scalable fees based on the amount being sold.',
                            icon: (
                                <svg
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: 'Transaction Limits.',
                            subtitle:
                                'Whales belong in oceans, not in space. The Laika Protocol introduces a limit to the maximum amount of Laika tokens that a holder can trade in a single transaction.',
                            icon: (
                                <svg
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: 'Cross Chain Integration.',
                            subtitle:
                                'Team Laika is constantly expanding to various chains as they become available, and utilizing bridging tools to ensure that the token is able to remain relevant and available to everyone at all times.',
                            icon: (
                                <svg
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: 'Timelocked.',
                            subtitle:
                                'Lets the team upgrade the protocol as required, but keeps your investment safe from malicious actors.',
                            icon: (
                                <svg
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            ),
                        },
                    ].map((item, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Box
                                component={Card}
                                padding={4}
                                borderRadius={4}
                                width={'100%'}
                                height={'100%'}
                                data-aos={'fade-up'}
                            >
                                <Box display={'flex'} flexDirection={'column'}>
                                    <Box
                                        component={Avatar}
                                        width={50}
                                        height={50}
                                        marginBottom={2}
                                        bgcolor={theme.palette.primary.main}
                                        color={theme.palette.background.paper}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Box
                                        component={Typography}
                                        variant={'h6'}
                                        gutterBottom
                                        sx={{fontWeight: 500}}
                                    >
                                        {item.title}
                                    </Box>
                                    <Typography color="text.secondary">
                                        {item.subtitle}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Features;
