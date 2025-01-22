import styles from "./NextCar.module.css";
export default function NextCar() {
  return (
    <div className={styles.nextBox}>
      <div>
        <p>Your next car is waiting for you here</p>
        <button>More</button>
      </div>
      <div>
        <figure>
          <img
            src="/laptopImageMain.png"
            alt="laptopImage"
            className={styles.laptopImage}
          />
        </figure>
      </div>
    </div>
  );
}
