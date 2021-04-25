import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
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
}));

interface Props {
    create: any;
}

export const CreateForm = ({ create }: Props): JSX.Element => {
    const classes = useStyles();
    const { t } = useTranslation();

    const formValidationSchema = Yup.object().shape({
        title: Yup.string().required(t('createForm.errorNamePresence')),
        date: Yup.string().required(t('createForm.errorDatePresence')),
        beers: Yup.number().required(t('createForm.errorBeersQuantityPresence')),
        people: Yup.number().required(t('createForm.errorPeoplePresence')),
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            date: '',
            temperature: 0,
            people: 0,
            beers: 0,
        },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
            create({ ...values, status: 'pending' });
        },
    });

    return (
        <div className={classes.root}>
            <form data-test="CreateForm" className={classes.form} onSubmit={formik.handleSubmit}>
                <TextField
                    data-test="inputCreateName"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label={t('createForm.title')}
                    name="title"
                    autoFocus
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    error={formik.errors.title ? true : false}
                />
                {formik.errors.title && formik.touched.title ? (
                    <div data-test="errorMessageCreateTitle" className={classes.error}>
                        {formik.errors.title}
                    </div>
                ) : null}
                <TextField
                    data-test="inputCreateDate"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="date"
                    type="date"
                    id="date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    error={formik.errors.date ? true : false}
                />
                {formik.errors.date && formik.touched.date ? (
                    <div data-test="errorMessageCreateDate" className={classes.error}>
                        {formik.errors.date}
                    </div>
                ) : null}
                <TextField
                    data-test="inputCreateTemperature"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    disabled={true}
                    name="temperature"
                    label={t('createForm.temperature')}
                    type="number"
                    id="temperature"
                    onChange={formik.handleChange}
                    value={formik.values.temperature}
                />
                <TextField
                    data-test="inputCreatePeople"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="people"
                    label={t('createForm.people')}
                    type="number"
                    id="people"
                    onChange={formik.handleChange}
                    value={formik.values.people}
                    error={formik.errors.people ? true : false}
                />
                {formik.errors.people && formik.touched.people ? (
                    <div data-test="errorMessageCreatePeople" className={classes.error}>
                        {formik.errors.people}
                    </div>
                ) : null}
                <TextField
                    data-test="inputCreateBeers"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="beers"
                    label={t('createForm.beers')}
                    type="number"
                    id="beers"
                    onChange={formik.handleChange}
                    value={formik.values.beers}
                    error={formik.errors.beers ? true : false}
                />
                {formik.errors.beers && formik.touched.beers ? (
                    <div data-test="errorMessageCreateBeers" className={classes.error}>
                        {formik.errors.beers}
                    </div>
                ) : null}
                <Button
                    data-test="SubmitCreateForm"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    {t('createForm.submit')}
                </Button>
            </form>
        </div>
    );
};
