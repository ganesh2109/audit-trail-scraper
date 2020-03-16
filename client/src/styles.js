import { makeStyles } from '@material-ui/core/styles';
import auditbg from './auditbg.jpg';
import landscape from './landscape_1.png';
import rainbow from './rainbow2.png';

const drawerWidth = 200;

const useStyles = function () {
  return makeStyles(theme => ({
    root: {
      display: 'flex',
      //background: 'bottom center url(' + landscape + ') #A8DDE0 no-repeat',
      backgroundSize: '100% 40%',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      color: '#fff',
      background: '#000',
      backgroundSize: 'cover',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: '#000',
      backgroundSize: 'cover',
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(1),
      color: '#FFF',
      fontWeight: 'bold',
    },
    menuButton: {
      color: '#FFF',
      marginRight: 6,
    },
    avatar: {
      marginLeft: theme.spacing(2),
      border: '2px solid #FFF',
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      // background: '#FFF center bottom url(' + drawerImage + ') no-repeat',
      backgroundSize: 'auto 30%',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      overflowX: 'hidden',
    },
    container: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(3),
      maxWidth: '1650px'
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255)',
    },
    paper1: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255)',
      maxWidth: '1000px'
    },
    fixedHeight: {
      height: 375,
    },
    section: {
      marginBottom: theme.spacing(2),
    },
    copyright: {
      color: '#000',
      paddingTop: theme.spacing(2),
      paddingBottom: '50px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    menuIcon: {
      color: '#FFF',
    },
    pageIcon: {
      color: '#FFF',
    },
    cloudTitle: {
      color: '#FFDF01',
      fontSize: '50px',
      textAlign: 'center',
      margin: '0px',
      marginBottom: '-10px',
    },
    cloudSubTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    avatarradius: {
      'border-radius': '50%',
      width: '200px',
      border: '2px solid #035478',
    },
    centeralign: {
      'text-align': 'center',
      marginBottom: theme.spacing(2),
    },
    dashboard: {
      borderRadius: '20px',
    },
    backgroundblack: {
      background: '#000',
      color: '#fff'
    }
  }))();
};

export default useStyles;
