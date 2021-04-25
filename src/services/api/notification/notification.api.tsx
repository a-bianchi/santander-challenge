import * as Types from './notification.types';

export class NotificationApi {
    private notifications = [
        {
            id: 1,
            userId: '2',
            message: 'Invitación a meetups el dia 20/04/2021',
            date: '10/04/2021',
        },
        {
            id: 2,
            userId: '2',
            message: 'Invitación cancelada a meetups el dia 20/04/2021',
            date: '12/04/2021',
        },
        {
            id: 3,
            userId: '1',
            message: 'Invitación creada con exito para el dia 04/05/2021',
            date: '25/04/2021',
        },
    ];

    /**
     * Get notifications.
     */
    async getUserNotifications(userId: string): Promise<Types.GetNotificationResult> {
        // make the api call

        const notifications = this.notifications.filter((notification) => notification.userId === userId);

        const response = notifications
            ? {
                  ok: true,
                  problem: null,
                  originalError: null,
                  data: notifications,
                  status: 200,
              }
            : {
                  ok: false,
                  problem: 'CLIENT_ERROR',
                  originalError: {
                      name: 'error',
                      code: '401',
                      config: { url: 'null' },
                      isAxiosError: true,
                      toJSON: {},
                  },
                  data: [
                      {
                          id: 0,
                          userId: '',
                          message: '',
                          date: '',
                      },
                  ],
                  status: 401,
              };

        // the typical ways to die when calling an api
        if (!response.ok) {
            return {
                kind: 'unauthorized',
            };
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        // transform the data into the format we are expecting
        try {
            return { kind: 'ok', notifications: response.data };
        } catch {
            return { kind: 'bad-data' };
        }
    }
}
