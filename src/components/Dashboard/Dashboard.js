import React, {useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

import Portfolio from './Portfolio'
import NavBar from '../Navbar'
import PortfolioChart from './PortfolioChart'
import RobinhoodContext from '../../RobinhoodContext'
import NewsContainer from './NewsContainer';
import CurrentBalance from './CurrentBalance'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const DashBoard = () => {

   const {token} = useContext(RobinhoodContext);

   let currentUser, balance, balanceChange, balancePercent, dailyData, max, min;

   if(!token) {
     return null
   }
    return(
      <>
      <NavBar />
      <PortfolioChart
      currentUser={currentUser}
      balance={balance}
      balanceChange={balanceChange}
      balancePercent={balancePercent}
      dailyData={dailyData}
      max={max}
      min={min}
      />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <CurrentBalance />
          <NewsContainer />
        </Grid>

        <Grid item xs={3}>
          <Portfolio token={token}/>
        </Grid>

      </Grid>
    </>
    )
}


export default DashBoard;