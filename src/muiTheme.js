
import { createMuiTheme } from '@material-ui/core/styles';

import deepOrange from '@material-ui/core/colors/deepOrange';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
        secondary: red,
    },
    status: {
        danger: 'orange',
    },
});

export default theme;