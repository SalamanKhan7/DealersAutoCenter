import React from "react";
import styles from "./AutoLoanCalculator.module.css";

const AutoLoanCalculator = () => {
  return (
    <div className={styles.container}>
      {/* Main Blue and White Section */}
      <div className={styles.content}>
        {/* Left Form Section */}
        <div className={styles.formSection}>
          <h2 className={styles.title}>Auto Loan Calculator</h2>
          <form className={styles.formSubSection}>
            <div className={styles.inputGroup}>
              <label>Vehicle Amount</label>
              <input type="text" placeholder="$ 0.00" />
            </div>
            <div className={styles.inputGroup}>
              <label>Down Payment</label>
              <input type="text" placeholder="$ 0.00" />
            </div>
            <div className={styles.inputGroup}>
              <label>Trade-in-Value</label>
              <input type="text" placeholder="$ 0.00" />
            </div>
            <div className={styles.inputGroup}>
              <label>TTL (Title, Taxes, and License Plates)</label>
              <input type="text" placeholder="$ 0.00" />
            </div>
            <div className={styles.inputGroup}>
              <label>Interest Rate</label>
              <input type="text" placeholder="$ 0.00" />
            </div>
            <div className={styles.inputGroup}>
              <label>Loan Terms (Monthly)</label>
              <div className={styles.buttonGroup}>
                <button type="button">36</button>
                <button type="button" className={styles.activeButton}>
                  60
                </button>
                <button type="button">72</button>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Approx. Credit Score</label>
              <div className={styles.creditScoreGroup}>
                <div>
                  Poor
                  <br />
                  360 to 659
                </div>
                <div>
                  Fair
                  <br />
                  660 to 699
                </div>
                <div className={styles.activeCredit}>
                  Good
                  <br />
                  700 to 749
                </div>
                <div>
                  Excellent
                  <br />
                  750 to 850
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Right Circular Section */}
        <div className={styles.circleSection}>
          <div className={styles.circle}>
            <p className={styles.amount}>
              $0 <br />
              <span>Month</span>
            </p>
          </div>
          <p className={styles.preApproved}>Get Pre-Approved</p>
          <button className={styles.applyButton}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default AutoLoanCalculator;
