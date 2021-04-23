import { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { isAdmin } from '../../utils/storage';
//import { useTranslation } from 'react-i18next';
const Admin = observer(
    (): ReactElement => {
        const history = useHistory();

        useEffect(() => {
            if (!isAdmin()) {
                history.push('/user');
            }
        }, []);

        return (
            <div>
                <p>Soy Admin</p>
            </div>
        );
    },
);

export default Admin;
