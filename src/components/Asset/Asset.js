import React, {useState, useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid'
import { getAssetData } from '../../fetches/asset'
import NavBar from '../Navbar';
import TradePanel from './TradePanel'
import RobinhoodContext from '../../RobinhoodContext';
import StockChart from '../charts/StockChart';
import CompanyInfo from './CompanyInfo';
import CompanyNews from './CompanyNews'
import {useParams} from 'react-router-dom';

const Asset = () => {

  const {token, asset, setAsset} = useContext(RobinhoodContext)
  const [lastPrice, setLastPrice] = useState(0)
  const {symbol} = useParams();

  useEffect(()=> {
    (async() => {
      if(asset.data.ticker !== symbol){
        const dataRes = await getAssetData(token, symbol);

        await setAsset(dataRes)
      }
    })();
  }, [asset, symbol, token, setAsset])

  if(!asset){
    return null
  }

  return(
    <>
    <NavBar />
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <StockChart />
        <CompanyInfo />
        <CompanyNews />

      </Grid>



      <Grid item xs={3}>
        <TradePanel />
      </Grid>
    </Grid>
    </>
  )

}

export default Asset;