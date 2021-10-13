import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
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
  paper: {
    padding: theme.spacing(3),
    background: '#F7F4EF',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '20px',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    fontFamily: ['curves',].join(','),
  },
  buttonSubmit: {
    background: 'linear-gradient(0deg, #f1dabf 70%, #92817a 120%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '1px 1px 2px 2px #04030f',
    color: '#04030f',
    height: 48,
    padding: '0 30px',
  },
  write: {
    fontWeight: 400,
    fontFamily: ['curves',].join(','),
  },
  clearButton: {
    background: 'linear-gradient(0deg, #f1dabf 5%, #92817a 140%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0px 1px 2px 2px #04030f',
    color: '#04030f',
    height: 30,
    padding: '0 30px',
    margin: '10px 0px',
  },
}));
