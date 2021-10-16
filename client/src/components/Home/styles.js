import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    background: '#F7F4EF',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    background: '#F7F4EF',
    '& .Mui-selected': {
      background: 'linear-gradient(0deg, #f1dabf 5%, #92817a 140%)',
      color:'#362417',
      boxShadow: '0px 1px 2px 2px #04030f',
    },
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton: {
    background: 'linear-gradient(0deg, #f1dabf 5%, #92817a 140%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0px 1px 2px 2px #04030f',
    color: '#04030f',
    height: 30,
    padding: '0px 30px',
    margin: '20px 0px',
  },
  firstTextField: {
    '& label.Mui-focused': {
      color: 'black',
      fontFamily: ['curves',].join(','),
      fontWeight: 100,
    },
  },
}));