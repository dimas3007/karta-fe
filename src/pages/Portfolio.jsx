import Tabs from "../components/Tabs";

const tabs = [
  {
    label: "Tokens",
    content: `
      function sum(a, b) {
        return a + b;
      }
    `,
  },
  {
    label: "NFTs",
    content: `
      def sum(a, b):
        return a + b
    `,
  },
];

const Portfolio = () => {
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
        <h2>$1,234</h2>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Portfolio;
