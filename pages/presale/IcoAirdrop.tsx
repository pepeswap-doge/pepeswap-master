import React, { useEffect } from 'react';
import { useWallet } from 'use-wallet';
import { makeStyles } from '@material-ui/core/styles';
import App from './App'

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const Bank: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (<App />)
};

export default Bank;
