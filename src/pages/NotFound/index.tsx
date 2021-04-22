import { ReactElement } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const NotFound = (): ReactElement => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography data-test="Text404" component="h1" variant="h1">
                    404
                </Typography>
                <Typography data-test="TextError" component="h1" variant="h1">
                    Error
                </Typography>
            </div>
        </Container>
    );
};

export default NotFound;
