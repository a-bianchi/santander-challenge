import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
    table: {
        minWidth: 650,
    },
    divider: {
        marginTop: theme.spacing(4),
    },
    createButton: {
        display: 'flex',
        justifyContent: 'right',
        marginBottom: theme.spacing(1),
    },
    handleButton: {
        marginLeft: theme.spacing(1),
    },
}));

export type DataTableNotificationType = {
    message: string;
    date: string;
};

interface Props {
    title: string;
    data?: DataTableNotificationType[] | [];
}

export const NotificationTable = ({ title, data = [] }: Props): JSX.Element => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <div className={classes.divider}>
            <h1 data-test="Title">{title}</h1>
            <TableContainer component={Paper}>
                <Table data-test="TableNotification" className={classes.table} aria-label="simple table">
                    <TableHead data-test="Header">
                        <TableRow>
                            <TableCell align="center">{t('dataTable.message')}</TableCell>
                            <TableCell align="center">{t('dataTable.date')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody data-test="BodyTableNotification">
                        {data.map((row, index) => (
                            <TableRow key={`${row.date}-${index}`}>
                                <TableCell align="center">{row.message}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
