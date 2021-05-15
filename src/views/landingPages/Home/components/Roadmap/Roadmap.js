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
            title: 'PancakeSwap Listing',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Waterfall Listing',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Launch Contest',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Poocoin Ad Campaign',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Discord Community',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Reddit Community Launch',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Bogged.finance Ad campaign',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Bogged.finance Listing',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: '1,000 Holder Milestone Contest',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'First official AMA',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'CryptoMoonShot Listing',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Harmony.One Launch',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: '2,500 Holder Milestone Contest',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Trust Wallet Listing',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'LiveCoinWatch Listing',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: '5,000 Holder Milestone Contest',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'CoinGecko Listing',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'CoinMarketCap Listing',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'First Major Exchange Listing',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'Harmony.One Bridge',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'TechRate Audit',
        },
        {
            date: 'TBA',
            title: 'Mobile App',
        },
        {
            date: 'TBA',
            title: 'First Official NFT set',
        },
        {
            date: 'TBA',
            title: 'First Charity Event',
        },
        {
            date: 'TBA',
            title: 'Second Major Exchange Listing',
        },
        {
            date: 'TBA',
            title: '10,000 Holder Milestone Contest',
        },
        {
            date: 'TBA',
            title: 'Esports Team Launch',
        },
        {
            date: 'TBA',
            title: 'Additional Cross-chain Integration',
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
