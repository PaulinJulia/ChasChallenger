import { Link } from "react-router-dom";
import styles from "./HomeRoute.module.css"
/* import back from "../Images/back.png" */
/* import Footer from "../components/Footer" */

export const HomeRoute = () => {
  return (
    <>
    <main>
      <div className={styles.containerheader}>
        <h2 className={styles.titleone}>
          Fantasy
        </h2>
        <h1 className={styles.titletwo}>
          Chass
        </h1>
      </div>
      <p className={styles.introtext}>Spelet för dig gillar att förena nytta med nöje!</p>
      <Link to={"/login"}>
      <p> <button title="Spela" className={styles.playbutton}>PLAY</button></p>
      </Link>
          
    </main>
    {/* <Footer /> */}
    
    </>
  );
};
