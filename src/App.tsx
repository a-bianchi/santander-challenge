import { ReactElement, Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme } from './theme';
import { Routing } from './navigation/Routing';
import { RootStore, RootStoreProvider, setupRootStore } from './models';
import './i18n/i18n';

const App = (): ReactElement => {
    const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

    useEffect(() => {
        (async () => {
            setupRootStore().then(setRootStore);
        })();
    }, []);

    if (!rootStore) return <div>Load..</div>;

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <RootStoreProvider value={rootStore}>
            <Suspense fallback="loading">
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
            </Suspense>
        </RootStoreProvider>
    );
};

export default App;
