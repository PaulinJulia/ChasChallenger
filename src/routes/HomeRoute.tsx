import { Link } from "react-router-dom";
import styles from "./HomeRoute.module.css"
/* import back from "../Images/back.png" */
import Footer from "../components/Footer"

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
      <p className={styles.introtext}>Det här är ett spel för dig som lägger för lite tid framför skärmen</p>
      <Link to={"/login"}>
        <button title="Spela" className={styles.playbutton}>PLAY</button>
      </Link>
     
   {/*    <article className={style["card"]}>
        <img src={back} alt="Bild" className={style["read-more-image"]}/>
        <p className={style["read-more-text"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nihil magni. Rem voluptatem repellendus.</p>
        
        <Link to="/about"><button title="Read more" className={style["read-more-button"]}>Read more</button></Link>
      </article>
            <article className={style["card"]}>
        <img src={back} alt="Bild" className={style["read-more-image"]}/>
        <p className={style["read-more-text"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nihil magni. Rem voluptatem repellendus.</p>
        <button title="Read more" className={style["read-more-button"]}>Read more</button>
      </article> */}
     
    </main>
    {/* <Footer /> */}
    
    </>
  );
};
