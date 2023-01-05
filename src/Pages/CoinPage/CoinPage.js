import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinPageLayout from "../../Components/CoinPageLayout";

export default function CoinPage(props) {
  const [coinData, setCoinData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getCoinData();
  }, []);
  const getCoinData = async () => {
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/${props.match.params.coinname}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      setCoinData(response.data);
      setIsLoading(true);
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <>{coinData ? <CoinPageLayout data={coinData} /> : <div>Loading...</div>}</>
  );
}
