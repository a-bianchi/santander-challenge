import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme } from './theme';
import { Routing } from './navigation/Routing';

const App = (): ReactElement => {
    return (
        <ThemeProvider theme={Theme}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <title>Meetups</title>
            </Helmet>
            <CssBaseline />
            <Routing />
        </ThemeProvider>
    );
};

export default App;
