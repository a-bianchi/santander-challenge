import { ReactElement, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { isAdmin } from '../../utils/storage';
import { NavBar, DataTable, CreateForm, DataTableType } from '../../components';
import { Container, createStyles, makeStyles, Modal, Theme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { MeetupApi, WeatherApi } from '../../services/api/api';
import { useStores } from '../../models';
import { convertWeather } from '../../utils';
import { Options } from '../../types';

const rand = () => {
    return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

const mockData = [
    {
        title: 'Meetup mock',
        date: '2021-04-25',
        temperature: 23,
        people: 66,
        beers: 66,
        status: 'confirmed',
    },
];

const convert = (row): DataTableType => {
    return {
        title: row.title,
        date: row.date,
        temperature: row.temperature,
        people: row.people,
        beers: row.beers,
        status: row.status,
    };
};

export const Admin = observer(
    (): ReactElement => {
        const classes = useStyles();
        const history = useHistory();
        const { t } = useTranslation();
        const weatherApi = new WeatherApi();
        const meetup = new MeetupApi();
        const { userStore } = useStores();
        const [open, setOpen] = useState(false);
        const [meetups, setMeetups] = useState(mockData);
        const [modalStyle] = useState(getModalStyle);
        const [weather, setWeather] = useState<Options[]>([]);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        const saveMeetups = (meetup) => {
            setMeetups([...meetups, meetup]);
        };

        const cancelMeetups = async (meetupBody) => {
            console.log(meetupBody);
            await meetup.update(meetupBody);
        };

        const actions = [
            {
                name: t('admin.cancel'),
                handler: async (meetupBody) => {
                    await cancelMeetups(meetupBody);
                    console.log('Cancelar');
                },
            },
            {
                name: t('admin.invite'),
                handler: () => {
                    console.log('Invitar');
                },
            },
        ];

        useEffect(() => {
            if (!isAdmin()) {
                history.push('/user');
            }
            const userId = userStore.id || '1';
            const getMeetup = async (): Promise<void> => {
                try {
                    const data = await meetup.getUserMeetup(userId);
                    if (data && data.kind === 'ok') {
                        const arrayMeetups = data.meetups.map((meet) => convert(meet));
                        setMeetups(arrayMeetups);
                    }
                } catch (error) {
                    console.log(`Error: getUserMeetup ${error}`);
                }
            };
            const getForecastData = async (): Promise<void> => {
                try {
                    await weatherApi.setup();
                    const data = await weatherApi.getForecast();
                    if (data && data.kind === 'ok') {
                        const responseWeather = convertWeather(data.weather);
                        if (responseWeather) setWeather(responseWeather);
                    }
                } catch (error) {
                    console.log(`Error: getForecast ${error}`);
                }
            };
            getMeetup();
            getForecastData();
        }, []);

        return (
            <div>
                <NavBar data-test="NavBar" />
                <Container maxWidth="md">
                    <DataTable
                        data-test="DataTable"
                        title={t('admin.tableTitle')}
                        create={handleOpen}
                        actions={actions}
                        data={meetups}
                    />
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <CreateForm create={saveMeetups} options={weather} />
                        </div>
                    </Modal>
                </Container>
            </div>
        );
    },
);
