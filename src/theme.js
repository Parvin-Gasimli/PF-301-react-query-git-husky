import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  components: {
    MuiStat: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
        },
        value: {
          color: '#fff',
        },
        unit: {
          color: '#888',
        },
      },
    },
  },
});
