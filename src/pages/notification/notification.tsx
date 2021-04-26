import { ReactElement, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { NavBar, NotificationTable } from '../../components';
import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStores } from '../../models';
import { NotificationApi } from '../../services/api/api';

const mockData = [
    {
        message: 'Meetup mock',
        date: '20/02/2021',
    },
];

export const Notification = observer(
    (): ReactElement => {
        const { t } = useTranslation();
        const [notifications, setNotifications] = useState(mockData);
        const notification = new NotificationApi();
        const { userStore } = useStores();

        useEffect(() => {
            const userId = userStore.id || '2';
            const notificationApi = async (): Promise<void> => {
                try {
                    const data = await notification.getUserNotifications(userId);
                    if (data && data.kind === 'ok') {
                        setNotifications(data.notifications);
                    }
                } catch (error) {
                    console.log(`Error: getNotification ${error}`);
                }
            };
            notificationApi();
        }, []);

        return (
            <div>
                <NavBar data-test="NavBar" admin={false} />
                <Container maxWidth="md">
                    <NotificationTable
                        data-test="DataTableNotification"
                        title={t('notification.tableTitle')}
                        data={notifications}
                    />
                </Container>
            </div>
        );
    },
);
