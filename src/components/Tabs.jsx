import { useState } from "react";

const Tabs = ({ tabs }) => {
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
        {/* {tabs[activeTab].content} */}
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
            <tr>
              <td>USDC</td>
              <td>100%</td>
              <td>$2.00</td>
              <td>
                $2.00 <p>$200 USDC</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabs;
