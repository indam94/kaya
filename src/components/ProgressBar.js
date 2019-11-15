import React from 'react'
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'

const BorderLinearProgress = withStyles({
    root: {
        height: 20,
        backgroundColor: lighten('#FF6B83', 0.5),
        borderRadius: 20,
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#FF6B83',
    },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(0),
    },
}));

export default function ProgressBar() {

    const classes = useStyles();

    return (
        <div className="progressbar">
            <BorderLinearProgress
                className={classes.margin}
                color="secondary"
            />
            KAYA is using your information to get smarter...
        </div>
    )
}
