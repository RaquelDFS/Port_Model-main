import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, me chamo <br />
            <span>Denis Henrique Rodrigues</span>
            <br /> Estudante Dev Front-End
          </p>

          <Link to="/Sobre" className={`${styles.btn} ${styles.btn_r}`}>
            {" "}
            Saiba Mais Sobre Mim{" "}
          </Link>
        </div>
        <figure>
          <img className={styles.img_home} src="../home.svg"></img>
        </figure>
      </section>
    </>
  );
}

export default Home;
