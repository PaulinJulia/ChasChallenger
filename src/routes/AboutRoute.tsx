import { Link } from "react-router-dom";
import style from "./AboutRoute.module.css";
/* import Footer from "../components/Footer" */

export const AboutRoute = () => {
  return (
    <>
    <main>
      <section>
        
        <h2 className={style["about-title"]}>What is Fantasy Chass?</h2>
        <article>
          <p className={style.text}>
          I spelet Fantasy Chass bildar spelarna ett äventyrssällskap som utforskar fantasivärldar tillsammans när de ger sig ut på episka uppdrag och samlar erfarenhetspoäng. Mästaren är spelets domare och berättare. Det finns ingen vinst eller förlust i D&D. Åtminstone inte på det traditionella sättet.
          </p>
          <p className={style.text}>
          I grund och botten är Fantasy Chass ett spel som fokuserar på berättande. Tärningarna är bara till hjälp. Allt är ditt beslut, från hur du ser ut, till hur du beter dig, till vad som händer härnäst.
Den gemensamma kreativiteten i ert D&D-spel bygger berättelser som ni kommer att berätta om och om igen, allt från saker värdiga legender till absurda händelser som kommer få er att skratta år senare. Ha kul och kom ihåg den gyllene regeln: dela aldrig upp gruppen!
          </p>
        </article>
      </section>
      <Link to="/">Go back</Link>
    </main>
    {/* <Footer /> */}
    </>
  );
};
