import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
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
        color: 'rgba(0, 0, 0, 1)',
        fontFamily: ['curves',].join(','),
        fontWeight: 100,
        padding: '10px 2px 10px 30px',
    },
    image: {
        marginLeft: '15px',
        marginBottom: '10px',
        marginTop: '10px',
    },
}));