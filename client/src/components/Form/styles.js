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
    background: 'linear-gradient(0deg, #788402 20%, #391804 100%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 3px rgba(91, 39, 6, 1)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  write: {
    fontWeight: 400,
    fontFamily: ['curves',].join(','),
  },
  clearButton: {
    background: 'linear-gradient(0deg, #391804 10%, #788402 90%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 3px rgba(91, 39, 6, 1)',
    color: 'white',
    height: 30,
    padding: '0 30px',
    margin: '10px 0px',
  },
}));
