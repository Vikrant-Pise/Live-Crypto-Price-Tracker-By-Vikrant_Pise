import React from "react";
import { useSelector } from "react-redux";
import { selectAssets } from "../features/cryptoSlice";
import classNames from "classnames";

const CryptoTable = () => {
  const assets = useSelector(selectAssets);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th className="market-cap">Market Cap</th>
            <th className="volume">Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td>
                <img src={coin.logo} alt={coin.name} className="coin-logo" />
                {coin.name} <small>{coin.symbol}</small>
              </td>
              <td>${coin.price.toLocaleString()}</td>
              <td className={classNames({ green: coin.percentChange1h >= 0, red: coin.percentChange1h < 0 })}>
                {coin.percentChange1h.toFixed(2)}%
              </td>
              <td className={classNames({ green: coin.percentChange24h >= 0, red: coin.percentChange24h < 0 })}>
                {coin.percentChange24h.toFixed(2)}%
              </td>
              <td className={classNames({ green: coin.percentChange7d >= 0, red: coin.percentChange7d < 0 })}>
                {coin.percentChange7d.toFixed(2)}%
              </td>
              <td className="market-cap">${coin.marketCap.toLocaleString()}</td>
              <td className="volume">${coin.volume24h.toLocaleString()}</td>
              <td>{coin.circulatingSupply}</td>
              <td>
                <img src={coin.chart} alt="7d chart" width="80" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;