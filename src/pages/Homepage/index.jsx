import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import PageNav from "../../Components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          Você viaja pelo mundo.
          <br />A WorldWise acompanha suas aventuras.
        </h1>
        <h2>
          Um mapa mundial que rastreia seus passos em todas as cidades que você
          pode imaginar. Nunca esqueça suas maravilhosas experiências e mostre
          aos seus amigos como você percorreu o mundo.
        </h2>
        <Link to="/login" className="cta">
          Comece agora
        </Link>
      </section>
    </main>
  );
}
