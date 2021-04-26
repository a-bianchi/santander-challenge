/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import { ChangeEvent } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Options } from '../../types';
import { calculateSixPackBeersQuantity } from '../../utils';

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
    formControl: {
        marginTop: theme.spacing(1),
        minWidth: 333,
    },
}));

interface Props {
    create: any;
    options: Options[];
}

const convertDataForm = (values) => {
    return {
        title: values.title,
        date: values.date.split(',')[0],
        temperature: values.date.split(',')[1],
        people: values.people,
        beers: values.beers,
    };
};

export const CreateForm = ({ create, options }: Props): JSX.Element => {
    const classes = useStyles();
    const { t } = useTranslation();

    const formValidationSchema = Yup.object().shape({
        title: Yup.string().required(t('createForm.errorTitlePresence')),
        date: Yup.string().required(t('createForm.errorDatePresence')),
        beers: Yup.number()
            .test('len', t('createForm.errorBeersMaxZero'), (val) => (val ? val > 0 : false))
            .required(t('createForm.errorBeersQuantityPresence')),
        people: Yup.number()
            .test('len', t('createForm.errorPeopleMaxZero'), (val) => (val ? val > 0 : false))
            .required(t('createForm.errorPeoplePresence')),
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
            const meet = convertDataForm(values);
            create({ ...meet, status: 'pending' });
        },
    });

    const onChangeDate = (e: ChangeEvent<any>) => {
        const datePick = e.target.value.split(',');
        formik.values.temperature = datePick[1];
        formik.handleChange(e);
    };

    const onChangePeople = (e: ChangeEvent<any>) => {
        const people = e.target.value;
        formik.values.beers = calculateSixPackBeersQuantity(people, formik.values.temperature);
        formik.handleChange(e);
    };

    return (
        <div className={classes.root}>
            <form data-test="CreateForm" className={classes.form} onSubmit={formik.handleSubmit}>
                <TextField
                    data-test="inputCreateName"
                    variant="outlined"
                    margin="normal"
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
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-date-native-simple">{t(`createForm.date`)}</InputLabel>
                    <Select
                        native
                        data-test="selectCreateDate"
                        fullWidth
                        value={formik.values.date}
                        onChange={onChangeDate}
                        label={t(`createForm.date`)}
                        inputProps={{
                            name: 'date',
                            id: 'date',
                        }}
                        error={formik.errors.date ? true : false}
                    >
                        <option aria-label="None" value="" />
                        {options?.map((option, index) => {
                            return (
                                <option key={`${option.name}-${index}`} value={[option.name, option.value.toString()]}>
                                    {`${option.name} - ${option.value}°C`}
                                </option>
                            );
                        })}
                    </Select>
                </FormControl>
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
                    fullWidth
                    name="people"
                    label={t('createForm.people')}
                    type="number"
                    id="people"
                    onChange={onChangePeople}
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
