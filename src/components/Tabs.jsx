import { useState } from "react";

const Tabs = ({ balance, nft, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="content">
      <div className="content__header">
        <h2>Assets</h2>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      <div className="tab-content">
        {tabs[activeTab].label === "Tokens" ? (
          <table>
            <thead>
              <tr>
                <td>Tokens</td>
                <td>Portfolio %</td>
                <td>Price</td>
                <td>Balance</td>
              </tr>
            </thead>
            <tbody>
              {balance?.data?.items?.map((item, index) => (
                <tr key={index}>
                  <td>{item.contract_ticker_symbol}</td>
                  <td>100%</td>
                  <td>${parseFloat(item.quote)}</td>
                  <td>
                    {item.contract_decimals === 0
                      ? `${parseInt(item.balance)}`
                      : `${parseFloat(item.quote)}`}{" "}
                    <p>
                      ${parseFloat(item.quote)} {item.contract_ticker_symbol}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="card-wrapper">
            {balance?.data?.items?.map((item, index) => (
              <div className="card-img" key={index}>
                <img src={item.logo_url} alt="logo" />
                <p>{item.contract_name}</p>
                <h3>{item.contract_ticker_symbol}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
