import { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { remove } from '../../utils/storage';

interface Props {
    admin?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const NavBar = ({ admin = false }: Props): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const [isadmin] = useState(admin);

    const { t } = useTranslation();
    const handleRight = (): void => {
        remove();
        history.push('/');
    };

    const handleNotification = (): void => {
        history.push('/notification');
    };

    const handleUserHome = (): void => {
        if (isadmin) history.push(`/admin`);
        if (!isadmin) history.push(`/user`);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography data-test="Title" variant="h6" className={classes.title}>
                        {t('navbar.title')}
                    </Typography>
                    <Button data-test="Role" color="inherit" onClick={handleUserHome}>
                        {t('navbar.home')}
                    </Button>
                    <Button data-test="Notification" color="inherit" onClick={handleNotification}>
                        {t('navbar.notification')}
                    </Button>
                    <Button data-test="Button" color="inherit" onClick={handleRight}>
                        {t('navbar.logout')}
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
