import { makeStyles } from '@mui/styles';
import { COLOURS } from './colours';

export const linkStyles = makeStyles(() => ({
  customLink: {
    color: COLOURS.VIOLET_1,
    fontSize: '18px',
    textDecoration: 'none',
    fontWeight: 500,
    '&:hover': {
      color: COLOURS.VIOLET_2,
    },
  },
  breadcrumbLink: {
    color: COLOURS.BLUE_1,
    fontSize: '18px',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      color: COLOURS.BLUE_2,
    },
  },
}));
