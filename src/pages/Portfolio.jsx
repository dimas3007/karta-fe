import { useState } from "react";
import Tabs from "../components/Tabs";
import useApi from "../utils/useApi";

const COLLECTION_ADDRESS = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

const Portfolio = () => {
  const { data: balance, url } = useApi(
    `eth-mainnet/address/${COLLECTION_ADDRESS}/balances_v2`,
    []
  );

  const { data: nft } = useApi(
    `eth-mainnet/address/${COLLECTION_ADDRESS}/balances_nft`,
    []
  );

  const [tabs, setTabs] = useState([
    {
      label: "Tokens",
    },
    {
      label: "NFTs",
    },
  ]);

  let netWorth = 0;

  balance?.data?.items?.forEach((item) => {
    if (item.contract_decimals === 0) {
      netWorth += parseInt(item.balance);
    } else {
      netWorth += parseFloat(item.quote);
    }
  });

  return (
    <div className="container">
      <div className="header">
        <div className="header__title">
          <h1>Portfolio</h1>
          <select name="" id="">
            <option value="">All Network</option>
          </select>
        </div>
        <p>0x00000...1234</p>
      </div>
      <div className="networth">
        <p>Net Worth</p>
        <h2>${netWorth}</h2>
      </div>
      <Tabs balance={balance} nft={nft} tabs={tabs} />
    </div>
  );
};

export default Portfolio;
