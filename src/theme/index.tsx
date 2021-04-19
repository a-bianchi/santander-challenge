import { createMuiTheme } from '@material-ui/core/styles';
import { Palette } from './palette';
import { Typography } from './typography';

export const Theme = createMuiTheme({
    palette: Palette,
    typography: Typography,
});
