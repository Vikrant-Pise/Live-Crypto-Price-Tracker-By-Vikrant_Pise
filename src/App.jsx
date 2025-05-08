import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAssets, updateAssets } from "./features/cryptoSlice";
import CryptoTable from "./components/CryptoTable";

function App() {
  const dispatch = useDispatch();
  const assets = useSelector(selectAssets);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedAssets = assets.map((asset) => ({
        ...asset,
        price: asset.price + (Math.random() * 100 - 50),
        percentChange1h: asset.percentChange1h + (Math.random() - 0.5),
        percentChange24h: asset.percentChange24h + (Math.random() - 0.5),
        percentChange7d: asset.percentChange7d + (Math.random() - 0.5),
        volume24h: asset.volume24h + Math.floor(Math.random() * 1000000),
      }));
      dispatch(updateAssets(updatedAssets));
    }, 2000);

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return (
    <div>
      {/* <h1 className="header">
        🪙 Real-Time Crypto Tracker 
        <small className="byline"> - By Vikrant Pise</small>
      </h1> */}
      <h1 className="crypto-header">
        <span className="crypto-icon">🪙</span>
        <span className="title-gradient">Real-Time Crypto Tracker</span>
        <span className="crypto-icon">🪙</span>
        
        <small className="byline">- By Vikrant Pise</small>
      </h1>
      <CryptoTable />
    </div>
  );
}

export default App;
