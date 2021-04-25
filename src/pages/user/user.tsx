import { ReactElement, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { isAdmin } from '../../utils/storage';
import { NavBar, DataTable, DataTableType } from '../../components';
import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../models';
import { MeetupApi } from '../../services/api/api';

const mockData = [
    {
        title: 'Meetup mock',
        date: '20/02/2021',
        temperature: 23,
        people: 66,
        beers: 66,
        status: 'confirmed',
    },
];

const convert = (row): DataTableType => {
    return {
        title: row.title,
        date: row.data,
        temperature: row.temperature,
        people: row.people,
        beers: row.beers,
        status: row.status,
    };
};

export const User = observer(
    (): ReactElement => {
        const history = useHistory();
        const { t } = useTranslation();
        const [meetups, setMeetups] = useState(mockData);
        const meetup = new MeetupApi();
        const { userStore } = useStores();

        const actionCheckIn = [
            {
                name: t('user.checkIn'),
                handler: () => {
                    console.log('check in');
                },
            },
        ];

        // const actionGoto = [
        //     {
        //         name: t('user.Goto'),
        //         handler: () => {
        //             console.log('go to');
        //         },
        //     },
        // ];

        useEffect(() => {
            if (isAdmin()) {
                history.push('/admin');
            }
            const userId = userStore.id || '2';
            meetup
                .getUserAttendMeetup(userId)
                .then((data) => {
                    if (data && data.kind === 'ok') {
                        const arrayMeetups = data.meetups.map((meet) => convert(meet));
                        setMeetups(arrayMeetups);
                    }
                })
                .catch((error) => {
                    console.log(`Error: getUserMeetup ${error}`);
                });
        }, []);

        return (
            <div>
                <NavBar data-test="NavBar" admin={false} />
                <Container maxWidth="md">
                    <DataTable
                        data-test="DataTable"
                        title={t('user.tableTitle')}
                        actions={actionCheckIn}
                        data={meetups}
                    />
                </Container>
            </div>
        );
    },
);
