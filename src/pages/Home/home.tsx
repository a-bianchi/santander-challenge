import { ReactElement, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import meetupPeopleImage from '../../images/meetup_home.jpg';
import logo from '../../images/logo.jpg';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useStores } from '../../models';
import { useHistory } from 'react-router-dom';
import { save } from '../../utils/storage';
import { Box } from '@material-ui/core';

const Help = (): JSX.Element => {
    return (
        <>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Usuarios de Prueba'}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Role: Admin - Username: Admin - Password: Admin'}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Role: User - Username: User - Password: User'}
            </Typography>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${meetupPeopleImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        width: '80px',
        height: '80px',
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    error: {
        color: theme.palette.error.dark,
    },
    logo: {
        width: '80px',
        height: '80px',
    },
}));

export const Home = observer(
    (): ReactElement => {
        const classes = useStyles();
        const { t } = useTranslation();
        const [error, setError] = useState(false);
        const { userStore } = useStores();
        const history = useHistory();

        const formValidationSchema = Yup.object().shape({
            username: Yup.string().trim().required(t('home.errorUsernamePresence')),
            password: Yup.string().trim().required(t('home.errorPasswordPresence')),
        });

        const formik = useFormik({
            initialValues: {
                username: '',
                password: '',
            },
            validationSchema: formValidationSchema,
            onSubmit: async (values) => {
                setError(false);
                await userStore.login(values.username, values.password);
                if (userStore.role !== '') {
                    save('root', userStore);
                    if (userStore.role === 'Admin') {
                        history.push('/admin');
                    }
                    if (userStore.role === 'User') {
                        history.push('/user');
                    }
                }
                setError(true);
            },
        });

        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <img src={logo} className={classes.logo} />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            {t('home.signin')}
                        </Typography>
                        <form data-test="FormLogin" className={classes.form} onSubmit={formik.handleSubmit}>
                            <TextField
                                data-test="LoginInputUsername"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="username"
                                label={t('home.username')}
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                error={formik.errors.username ? true : false}
                            />
                            {formik.errors.username && formik.touched.username ? (
                                <div data-test="errorMessageUsername" className={classes.error}>
                                    {formik.errors.username}
                                </div>
                            ) : null}
                            <TextField
                                data-test="LoginInputPassword"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="password"
                                label={t('home.password')}
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                error={formik.errors.password ? true : false}
                            />
                            {formik.errors.password && formik.touched.password ? (
                                <div data-test="errorMessagePassword" className={classes.error}>
                                    {formik.errors.password}
                                </div>
                            ) : null}
                            {error ? (
                                <div data-test="errorMessage" className={classes.error}>
                                    {t('home.errorNotValidCredentials')}
                                </div>
                            ) : null}
                            <Button
                                data-test="SubmitLogin"
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                {t('home.signin')}
                            </Button>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Help />
                    </Box>
                </Grid>
            </Grid>
        );
    },
);
