import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    background: '#F7F4EF',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& label.Mui-focused': {
      color: 'black',
      fontFamily: ['curves',].join(','),
      fontWeight: 100,
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'black',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(0deg, #f1dabf 70%, #92817a 120%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '1px 1px 2px 2px #04030f',
    color: '#04030f',
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(0deg, #f1dabf 5%, #92817a 140%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0px 1px 2px 2px #04030f',
    color: '#04030f',
  },
  title: {
    fontFamily: ['curves',].join(','),
  },
  anotherButton: {
    fontFamily: ['curves',].join(','),
  },
}));