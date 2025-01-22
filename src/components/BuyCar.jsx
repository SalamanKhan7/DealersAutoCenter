import styles from "./BuyCar.module.css";
export default function BuyCar() {
  return (
    <div className={styles.buyBox}>
      <div className={styles.heading}>We buy cars</div>
      <p>Get Started now by entering the VIN below</p>
      <div className={styles.formBox}>
        <div className={styles.head}>
          <div className={styles.tab}>VIN</div>
          <div className={styles.tab}>Licenses</div>
        </div>
        <div className={styles.body}>
          <form action="">
            <input type="text" placeholder="Enter your State" S />
            <button>Search</button>
          </form>
          <form action="">
            <input type="text" placeholder="Enter your License Number" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}
