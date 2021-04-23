import { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { isAdmin } from '../../utils/storage';

const User = observer(
    (): ReactElement => {
        const history = useHistory();

        useEffect(() => {
            if (isAdmin()) {
                history.push('/admin');
            }
        }, []);

        return (
            <div>
                <p>Soy User</p>
            </div>
        );
    },
);

export default User;
