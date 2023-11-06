import { makeStyles } from '@mui/styles';

export const flexBoxStyles = makeStyles(() => ({
  gridBox: {
    display: 'grid',
    flexDirection: 'column',
    padding: '10px',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
    gridAutoRows: '18rem',
    gridGap: '2rem',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
}));
