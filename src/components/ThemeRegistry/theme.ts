import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

//gogleRobotフォント
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

//ダークモードのテーマ例だけど実は使っていない
const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
