import React from 'react';
import { makeStyles } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: 'calc(100vh - 84px)',
  },
  blueSide: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    overflow: 'hidden',
  },
  blueSide__background: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350%',
    height: '350%',
  },
  blueSide__list: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: 700,
    },
  },
  ['blueSide__list-item']: {
    marginBottom: 40,
  },
  blueSide__icon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    overflow: 'hidden',
  },
  loginSide__wrapper: {
    width: 380,
  },
  loginSide__twitterIcon: {
    fontSize: 45,
    marginBottom: 20,
  },
  loginSide__title: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
  },
}));

const Signin = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSide__background} />
        <ul className={classes.blueSide__list}>
          <li className={classes['blueSide__list-item']}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSide__icon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes['blueSide__list-item']}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSide__icon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes['blueSide__list-item']}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSide__icon} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSide__wrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSide__twitterIcon}
          />
          <Typography variant="h4" className={classes.loginSide__title}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>

          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            style={{ marginBottom: 20 }}
          >
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth={true}>
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Signin;
