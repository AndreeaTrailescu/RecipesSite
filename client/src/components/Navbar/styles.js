import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 20,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        background: '#F7F4EF',
        
    },
    heading: {
        color: '#04030f',
        fontFamily: ['curves',].join(','),
        fontWeight: 100,
        padding: '10px 0px 10px 30px',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '10px',
        marginBottom: '10px',
        marginTop: '10px',
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse",
        }
    },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '700px',
    padding: '10px -200px 0 200px',
  },
  userName: {
    display: 'flex',
    alignItems: 'right',
    color: '#04030f',
    fontFamily: ['curves',].join(','),
    marginRight: '-100px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: '#F7F4EF',
    backgroundColor: '#04030f' ,
    marginRight: '-160px',
    marginLeft: '200px',
  },
  logout: {
    marginRight: '-200px',
    background: 'linear-gradient(0deg, #f1dabf 70%, #92817a 120%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '1px 1px 2px 2px #04030f',
    color: '#04030f',
  },
  signInButton: {
    marginRight: '-200px',
    background: 'linear-gradient(0deg, #f1dabf 70%, #92817a 120%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '1px 1px 2px 2px #04030f',
    color: '#04030f',
  }
}));