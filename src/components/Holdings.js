import React, {useState, useEffect} from "react";
import axios from "axios";

import { holdings } from "../Data/data.js";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings")
    .then((res) => {
      console.log("Holdings fetched successfully:", res.data);
      setAllHoldings(res.data);
    })
    .catch((err) => {
      console.error("Error fetching holdings:", err);
    });
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({ allHoldings.length })</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>Cur. Val</th>
            <th>P&L</th>
            <th>Net Chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal-stock.avg*stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loass";
            const dayChange = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayChange}>{stock.day}</td>
              </tr>
            )
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p  style={{marginLeft: "60px"}}>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
