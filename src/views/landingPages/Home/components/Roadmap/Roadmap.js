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
            title: 'BSC Launch',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Harmony Integration',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Matic Integration',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'First Major Exchange Listing',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Ethereum Integration',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Huobi Eco Integration',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'OKEx Integration',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Avalanche Integration',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'xDai Integration',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'Fantom Integration',
        },
        {
            date: 'Completed',
            color: '#32cd80',
            title: 'KCC Integration',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'Astro Farms',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'Second Major Exchange Listing',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'Additional Cross-chain Integration',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'Academy',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'Stargate',
        },
        {
            date: 'In Progress',
            color: '#ffbf00',
            title: 'Forge',
        },
        {
            date: 'TBA',
            title: 'Mobile App',
        },
        {
            date: 'TBA',
            title: 'Contract Optimization',
        },
        {
            date: 'TBA',
            title: 'Security Audit',
        },
        {
            date: 'TBA',
            title: 'Third Major Exchange Listing',
        },
        {
            date: 'TBA',
            title: 'Laika Bridge',
        },
        {
            date: 'TBA',
            title: 'Laika Oracle',
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
