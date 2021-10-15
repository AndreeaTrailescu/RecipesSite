import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '40px',
    height: '100%',
    position: 'relative',
    background: '#F7F4EF',
  },
  person: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    color: 'black',
    fontFamily: ['curves',].join(','),
    fontWeight: 100,
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    fontFamily: ['curves',].join(','),
    fontWeight: 100,
    padding: '0px 10px 20px 10px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  time: {
    position: 'absolute',
    padding: '7px 10px 70px 220px',
    color: 'black',
    fontFamily: ['curves',].join(','),
    fontWeight: 100,
    fontSize: '15px',
  },
  tags: {
    position: 'absolute',
    left: '10px',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
});