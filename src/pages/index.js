import HeroSlice from "../../slices/HeroSlice";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      <HeroSlice />
    </div>
  );
}
