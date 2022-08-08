import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import useCollapse from "react-collapsed";
import styles from "./Calculator.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Calculator = () => {
  const [price, setPrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(25000);
  const [term, setTerm] = useState(5);
  const [result, setResult] = useState("");

  const markUp = term * 0.1;
  const realtorFee = price * 0.05;

  const data = {
    labels: ["Markup", "Price", "Realtor Fee"],
    datasets: [
      {
        label: "# of Votes",
        data: [markUp * price, price, realtorFee],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
        cutout: 80,
      },
    ],
  };

  const calculate = () => {
    setResult(
      (price - downPayment + price * markUp + realtorFee) / (term * 12)
    );
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const config = {
    duration: 300,
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className={styles.calculator_block}>
      <div className={styles.header} {...getToggleProps()}>
        {isExpanded ? (
          <div className={styles.title_click}>
            <h4 className={styles.title}>Payment Calculator</h4>
            <p className={styles.open_close_click}>Close</p>
          </div>
        ) : (
          <div className={styles.title_click}>
            <h4 className={styles.title}>Payment Calculator</h4>
            <p className={styles.open_close_click}>Open</p>
          </div>
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className={styles.content}>
          <div className={styles.chart}>
            <Doughnut data={data} />
            <div className={styles.result}>
              <div className={styles.result_number}>
                {formatter.format(result)}
                <br></br>
                <span id={styles.per_month}>per month</span>
              </div>
            </div>
          </div>
          <div className={styles.input_fields}>
            <p>Property Price</p>
            <input
              type="text"
              placeholder="e.g. 770000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <p>Down Payment</p>
            <input
              type="text"
              placeholder="e.g. 100000"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />

            <p>Term in years</p>
            <input
              type="text"
              placeholder="e.g. 5"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />

            <button className={styles.calculate_btn} onClick={calculate}>
              Calculate
            </button>

            <p className={styles.markup}>Markup: 10% for each year</p>
            <p>Realtor Fee: 5% of property price</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
