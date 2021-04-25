import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Roadmap = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
        defaultMatches: true,
    });

    const timeline = [
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Website Launch',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Internal Audit',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Whitelist Presale',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Public Presale',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Listing on Pancake Swap',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Waterfall Listing',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'Unirocket Listing',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'Launch Contest',
        },
        {
            date: 'TBA',
            title: 'Poocoin Marketing',
        },
        {
            date: 'TBA',
            title: 'Live Recommended Slippage Calculator',
        },
        {
            date: 'TBA',
            title: '1,000 Holder Milestone Contest',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'CoinGecko Listing',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'CoinMarketCap Listing',
        },
        {
            date: 'TBA',
            title: 'Certik Audit',
        },
        {
            date: 'TBA',
            title: 'First Community Charity Run',
        },
        {
            date: 'TBA',
            title: 'First Major Exchange Listing',
        },
        {
            date: 'TBA',
            title: '5,000 Holder Milestone Contest',
        },
        {
            date: 'TBA',
            title: 'Website Overhaul',
        },
        {
            date: 'TBA',
            title: 'Esports Team Launch',
        },
        {
            date: 'TBA',
            title: 'Mobile App Launch',
        },
        {
            date: 'TBA',
            title: 'Cross-Chain Integration(Harmony One)',
        },
        {
            date: 'TBA',
            title: '10,000 Holder Mileston Contest',
        },
        {
            date: 'TBA',
            title: 'First Limited Edition NFT Pack Release',
        },
        {
            date: 'TBA',
            title: 'Second Community Charity Run',
        },
        {
            date: 'TBA',
            title: 'Second Major Exchange Listing',
        },
        {
            date: 'TBA',
            title: 'IDO Platform',
        },
        {
            date: 'TBA',
            title: 'Additional Cross-Chain Integration',
        },
    ];

    const TimeLineMobileView = ({timeline = []}) => (
        <Grid container spacing={2}>
            {timeline.map((item, i) => (
                <Grid item xs={12} key={i}>
                    <Box display={'flex'} alignItems={'center'} data-aos={'fade-up'}>
                        <Box
                            width={10}
                            height={10}
                            borderRadius={'100%'}
                            bgcolor={item.color ? item.color : theme.palette.primary.main}
                            marginRight={2}
                        />
                        <Box>
                            <Typography
                                variant={'subtitle1'}
                                color={'textSecondary'}
                                gutterBottom
                            >
                                {item.date}
                            </Typography>
                            <Typography variant={'h6'}>{item.title}</Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );

    TimeLineMobileView.propTypes = {
        timeline: PropTypes.array.isRequired,
    };

    const TimeLineDesktopView = ({timeline = []}) => (
        <Grid container spacing={2}>
            {timeline.map((item, i) => (
                <Grid item xs={12} key={i}>
                    <Box
                        paddingBottom={4}
                        display={'flex'}
                        alignItems={'center'}
                        flexDirection={i % 2 === 1 ? 'row-reverse' : 'row'}
                        marginRight={i % 2 === 1 ? 'calc(50% - 5px)' : 0}
                        marginLeft={i % 2 !== 1 ? 'calc(50% - 5px)' : 0}
                        data-aos={i % 2 === 1 ? 'fade-right' : 'fade-left'}
                    >
                        <Box
                            width={10}
                            height={10}
                            borderRadius={'100%'}
                            bgcolor={item.color ? item.color : theme.palette.primary.main}
                            marginRight={i % 2 !== 1 ? 5 : 0}
                            marginLeft={i % 2 === 1 ? 5 : 0}
                        />
                        <Box>
                            <Typography
                                variant={'subtitle1'}
                                color={'textSecondary'}
                                gutterBottom
                            >
                                {item.date}
                            </Typography>
                            <Typography variant={'h6'}>{item.title}</Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );

    TimeLineDesktopView.propTypes = {
        timeline: PropTypes.array.isRequired,
    };

    return (
        <Box>
            <Box marginBottom={4} id="roadmap">
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'medium',
                    }}
                    gutterBottom
                    color={'primary'}
                    align={isSm ? 'center' : 'left'}
                >
                    Roadmap
                </Typography>
                <Box
                    component={Typography}
                    fontWeight={700}
                    variant={'h3'}
                    align={isSm ? 'center' : 'left'}
                    gutterBottom
                >
                    There&apos;s only one way to the moon.
                </Box>
                <Typography
                    variant={'h6'}
                    component={'p'}
                    color={'textSecondary'}
                    align={isSm ? 'center' : 'left'}
                >
                    To get the best girl into space, you need the best plan.
                </Typography>
            </Box>
            {isSm ? (
                <TimeLineDesktopView timeline={timeline}/>
            ) : (
                <TimeLineMobileView timeline={timeline}/>
            )}
        </Box>
    );
};

export default Roadmap;
