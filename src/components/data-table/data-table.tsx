import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { MouseEventHandler } from 'react';

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

export type DataTableType = {
    title: string;
    date: string;
    temperature: number;
    people: number;
    beers: number;
    status: string;
};

type action = {
    name: string;
    handler: MouseEventHandler;
};

interface Props {
    title?: string;
    actions?: action[];
    create?: MouseEventHandler;
    data: DataTableType[] | [];
}

export const DataTable = ({ title, create, actions, data = [] }: Props): JSX.Element => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <div className={classes.divider}>
            <h1 data-test="Title">{title}</h1>
            <div className={classes.createButton}>
                {create ? (
                    <Button data-test="CreateButton" variant="contained" color="primary" onClick={create}>
                        {t('dataTable.create')}
                    </Button>
                ) : null}
            </div>
            <TableContainer component={Paper}>
                <Table data-test="Table" className={classes.table} aria-label="simple table">
                    <TableHead data-test="Header">
                        <TableRow>
                            <TableCell align="center">{t('dataTable.title')}</TableCell>
                            <TableCell align="center">{t('dataTable.date')}</TableCell>
                            <TableCell align="center">{t('dataTable.temperature')}</TableCell>
                            <TableCell align="center">{t('dataTable.people')}</TableCell>
                            <TableCell align="center">{t('dataTable.beers')}</TableCell>
                            <TableCell align="center">{t('dataTable.status')}</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody data-test="Body">
                        {data.map((row, index1) => (
                            <TableRow key={`${row.title}-${index1}`} data-test={`${row.title}-${index1}`}>
                                <TableCell component="th" scope="row" align="center">
                                    {row.title}
                                </TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">{`${row.temperature}°C`}</TableCell>
                                <TableCell align="center">{`${row.people}`}</TableCell>
                                <TableCell align="center">{`${row.beers}`}</TableCell>
                                <TableCell align="center">{t(`dataTable.${row.status}`)}</TableCell>
                                <TableCell align="right">
                                    {' '}
                                    {actions
                                        ? actions.map((action, index2) => {
                                              return (
                                                  <Button
                                                      key={`action-${index1}-${index2}`}
                                                      data-test={`action-${index1}-${index2}`}
                                                      variant="contained"
                                                      onClick={action.handler}
                                                      className={classes.handleButton}
                                                  >
                                                      {action.name}
                                                  </Button>
                                              );
                                          })
                                        : null}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
