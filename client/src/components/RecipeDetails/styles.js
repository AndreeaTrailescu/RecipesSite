import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
    fontFamily: ['curves',].join(','),
  },
  imageSection: {
    marginLeft: '20px',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    background: 'linear-gradient(0deg, #f1dabf 70%, #92817a 120%)',
    borderRadius: '10px',
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '10',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
  recommendedImage: {
    borderRadius: '30%',
    margin: '10px 10px 0 -12px',
  },
  commentButton: {
    background: 'linear-gradient(0deg, #f1dabf 70%, #92817a 120%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '1px 1px 2px 2px #04030f',
    color: '#04030f',
    height: 48,
  },
  root: {
    '& label.Mui-focused': {
      color: 'black',
      fontFamily: ['curves',].join(','),
      fontWeight: 100,
    },
  },
}));